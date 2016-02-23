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
    $('.redheart').on('mouseout', function(){
        $('.redheart').hide();
        $('.heart').show();
    })
});
//959494