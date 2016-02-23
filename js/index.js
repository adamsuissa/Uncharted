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
        $('.redheart').addClass('hidden');
        $('.heart').removeClass('hidden');
    })

});
//959494
//
$(function(){
   $('.play-btn-hover').on('click', function(){
       $('.play-btn-hover').addClass('hidden');
       $('.pause-btn').removeClass('hidden');
   })
});

//Pause
$(function(){
   $('.pause-btn').on('click', function(){
       $('.pause-btn').addClass('hidden');
   })
});

function keepRed(){
    $('.redheart').on('click', function(){
        $('.redheart').show()
    })
}

//Play btn hover
$(function(){
   $('.play-btn').on('mouseover', function(){
       $('.play-btn').addClass('hidden');
       $('.play-btn-hover').removeClass('hidden');
   })
});

$(function(){
    $('.play-btn-hover').on('mouseout', function () {
        $('.play-btn-hover').addClass('hidden');
        $('.play-btn').removeClass('hidden');
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

/////////////////////////////

toggle_color("#61beb3", "#90a2c6", 4000, 2000);

function toggle_color(color1, color2, cycle_time, wait_time) {

    setInterval(function first_color() {
        document.body.style.backgroundColor = color1;
        setTimeout(change_color, wait_time);
    }, cycle_time);

    function change_color() {
        document.body.style.backgroundColor = color2;
    }
}