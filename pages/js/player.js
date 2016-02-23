/**
 * Created by User on 2/22/2016.
 */

player = {};

<<<<<<< HEAD
player.init = function () {
    SC.initialize({
        client_id: '27bcac07db1cde6ee2ff5f3ad8d79969'
    });
    console.log('jquery init');
    $('.play-btn').on('click', player.playSong);
    $('.next-btn').on('click', player.nextSong);
};
player.songid = '47506738';

player.playSong = function playIt(){
    console.log('playit');
    SC.get("/tracks/" + player.songid).then(function(sound){
        url = sound.stream_url + "?client_id=27bcac07db1cde6ee2ff5f3ad8d79969";
=======
player.initWidget = function() {
    var widgetIframe = document.getElementById('sc-widget'),
        widget       = SC.Widget(widgetIframe);
>>>>>>> f750fc1186d60ba0fa18e43884cf798ffa71a29f

        $("#audio-test").attr("src", url);
        $("#audio-test")[0].play()
    });
};

<<<<<<< HEAD
player.nextSong = function nextSong() {
    player.songid = '47506738';
    player.playIt();
};

$(player.init);
=======

player.init = function () {
    SC.initialize({
        client_id: '27bcac07db1cde6ee2ff5f3ad8d79969'
    });

    player.initWidget();

    var track_url = 'http://soundcloud.com/forss/flickermood';
    SC.oEmbed(track_url, {auto_play: true}).then(function (oEmbed) {
        console.log('oEmbed response: ', oEmbed);
    });
};

$(player.init());
>>>>>>> f750fc1186d60ba0fa18e43884cf798ffa71a29f
