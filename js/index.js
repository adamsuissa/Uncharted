/**
 * Created by User on 2/23/2016.
 */
$(function(){
   $('.heart').on('mouseover', function(){
       $('.heart').addClass('hidden');
       $('.redheart').removeClass('hidden');
   })
});

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

    function togglePlay(on) {
    if (on && !player.playing) {
        $('.play-btn').addClass('hidden');
        $('.play-btn-hover').addClass('hidden');
        return true;
    }
    if (!on && player.playing) {

        return true;
    }
    return false;
}

/////////////////////////////


$(document).ready(function(){
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function change_random_bgcolor(change_time) {
        setInterval(function change_color() {

            $("body").css({
                "background-color": getRandomColor()
            });
        }, change_time);
    }
    change_random_bgcolor(3000);
});