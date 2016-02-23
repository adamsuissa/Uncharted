/**
 * Created by User on 2/22/2016.
 */

player = {};

player.init = function () {
    SC.initialize({
        client_id: '27bcac07db1cde6ee2ff5f3ad8d79969'
    });
    console.log('jquery init');
    $('.play-btn').on('click', player.playSong);
    $('.next-btn').on('click', player.nextSong);

};
player.songid = '298';

player.playSong = function playIt(){
    console.log('playit');
    SC.get("/tracks/" + player.songid).then(function(sound){
        console.log(sound.stream_url);
        var url = sound.stream_url + "?client_id=27bcac07db1cde6ee2ff5f3ad8d79969";
        $("#audio-test").attr("src", url);
        $("#audio-test")[0].play();
    });
};

player.nextSong = function nextSong() {
    player.songid = '47506738';
    player.playIt();
};

$(player.init);