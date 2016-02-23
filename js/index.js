/**
 * Created by User on 2/23/2016.
 */
$(function(){
   $('.heart').on('mouseover', function(){
       $('.heart').hide();
       $('.redheart').show();
   })
});

$(function(){

    $('.redheart').on('mouseout', function () {
        $('.redheart').hide();
        $('.heart').show();
    })

});
//959494
//
$(function(){
   $('.play-btn-hover').on('click', function(){
       $('.play-btn-hover').hide();
       $('.play-btn').hide();
       $('.pause-btn').show();
   })
});

//Pause
$(function(){
   $('.pause-btn').on('click', function(){
       $('.pause-btn').hide();
       $('.play-btn-hover').hide();
       $('.play-btn').show();
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
       $('.play-btn').hide();
       $('.play-btn-hover').show();
   })
});

$(function(){
    $('.play-btn-hover').on('mouseout', function () {
        $('.play-btn-hover').hide();
        $('.play-btn').show();
    })

});


//Skip btn hover
$(function(){
   $('.skip-btn').on('mouseover', function(){
       $('.skip-btn').hide();
       $('.skip-btn-hover').show();
   })
});

$(function(){
    $('.skip-btn-hover').on('mouseout', function () {
        $('.skip-btn-hover').hide();
        $('.skip-btn').show();
    })

});

///////////////////////////// Adams shit code

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