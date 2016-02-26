
/*

$(function(){
    $('.redheart').on('mouseout', function () {
        if (!player.song.liked) {
            $('.redheart').addClass('hidden');
            $('.heart').removeClass('hidden');
        }
    });
});
//959494
//
$(function(){
   $('.play-btn-hover').on('click', function(){
       //if (!player.playing) {
           $('.play-btn-hover').addClass('hidden');
           $('.pause-btn').removeClass('hidden');
       //}
   });
});

//Pause
$(function(){
   $('.pause-btn').on('click', function(){
       $('.pause-btn').addClass('hidden');
       $('.play-btn').removeClass('hidden');
   });
});


//Play btn hover
$(function(){
   $('.play-btn').on('mouseover', function(){
       $('.play-btn').addClass('hidden');
       $('.play-btn-hover').removeClass('hidden');
   });
});

$(function(){
    $('.play-btn-hover').on('mouseout', function () {
        if (player.playing) {
            $('.play-btn-hover').addClass('hidden');
            $('.play-btn').removeClass('hidden');
        }
    })

});


//Skip btn hover
$(function(){
   $('.skip-btn').on('mouseover', function(){
       $('.skip-btn').addClass('hidden');
       $('.skip-btn-hover').removeClass('hidden');
   })
});

$(function(){
    $('.skip-btn-hover').on('mouseout', function () {
        $('.skip-btn-hover').addClass('hidden');
        $('.skip-btn').removeClass('hidden');
    })

});
}*/

interface = {};

(function (interface) {
    interface = interface || {};
    interface.seizures = true;

    interface.bindings = function () {
        $('.skip-btn').on('click', function () {
            $('.redheart').addClass('hidden');
            $('.heart').removeClass('hidden');
            $('.heart').addClass('clickable');
            $('.redheart').addClass('clickable');

            $('.play-btn').addClass('hidden');
            $('.pause-btn').removeClass('hidden');
        });

        $('.play-btn').on('click', function () {
            $('.play-btn').addClass('hidden');
            $('.pause-btn').removeClass('hidden');
        });

        $('.pause-btn').on('click', function () {
            $('.play-btn').removeClass('hidden');
            $('.pause-btn').addClass('hidden');
        });

        $('.heart').on('click', function () {
            if (!player.song.liked) {
                $('.heart').addClass('hidden');
                $('.redheart').removeClass('hidden');
                $('.heart').removeClass('clickable');
                $('.redheart').removeClass('clickable');
            }
        });
    };

    interface.init = function () {
        interface.bindings();
        interface.seizureGenerator(3000);
    };

//////////// ADAM's SHIT CODE ////////
    interface.seizureGenerator = function (interval) {
        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * letters.length)];
            }
            return color;
        }

        setInterval(function () {
            if (interface.seizures) {
                $("body").css({
                    'background-color': getRandomColor()
                });
            }
        }, interval);
    };
//////////// END SHIT CODE ////////

})(interface);

$(interface.init);