/**
 * Created by User on 2/23/2016.
 */
$(function(){
   $('.heart').on('mouseover', function(){
       $('.heart').hide();
       $('.redheart').show();
   });
});

$(function(){
    $('.redheart').on('mouseout', function(){
        $('.redheart').hide();
        $('.heart').show();
    });
});
//959494
$(function(){
   $('.play-btn').on('click', function(){
       $('.play-btn').hide();
       $('.pause-btn').show();
   });
});

$(function(){
   $('.pause-btn').on('click', function(){
       $('.pause-btn').hide();
       $('.play-btn').show();
   });
});