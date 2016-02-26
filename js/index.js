
var interface = {};

(function (interface) {
    interface = interface || {};
    interface.seizures = true;

    interface.bindings = function () {
        $('.next-btn').on('click', function () {
            $('.heart').removeClass('red');
            $('.heart').addClass('clickable');
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
                $('.heart').addClass('red');
                $('.heart').removeClass('clickable');
            }
        });
    };

    interface.init = function () {
        interface.bindings();
        //interface.seizureGenerator(3000);
    };

//////////// ADAM's SHIT CODE ////////
//    interface.seizureGenerator = function (interval) {
//        function getRandomColor() {
//            var letters = '0123456789ABCDEF'.split('');
//            var color = '#';
//            for (var i = 0; i < 6; i++) {
//                color += letters[Math.floor(Math.random() * letters.length)];
//            }
//            return color;
//        }
//
//        setInterval(function () {
//            if (interface.seizures) {
//                $("body").css({
//                    'background-color': getRandomColor()
//                });
//            }
//        }, interval);
//    };
//////////// END SHIT CODE ////////

})(interface);

$(interface.init);