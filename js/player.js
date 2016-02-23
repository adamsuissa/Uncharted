/**
 * Created by User on 2/22/2016.
 */

player = {};
player.songid = '298';
player.song = {};

player.init = function () {
    SC.initialize({
        client_id: '27bcac07db1cde6ee2ff5f3ad8d79969'
    });
    console.log('jquery init');
    $('.play-btn').on('click', function () {
        $("#audio-test")[0].play();
    });
    $('.next-btn').on('click', player.playSong);
    $('.redheart').on('click', client.likeSong);
    $('.pause-btn').on('click', function () {
        $("#audio-test")[0].pause();
    });
};

player.playSong = function () {
    console.log('playit');
    client.getSong(function (sobj) {
        player.songid = sobj.song_id;
        console.log(sobj.song_id);
        player.song = sobj;
        SC.get("/tracks/" + player.songid).then(function(sound){
            console.log(sound.stream_url);
            var url = sound.stream_url + "?client_id=27bcac07db1cde6ee2ff5f3ad8d79969";
            $("#audio-test").attr("src", url);
            $("#audio-test")[0].play();
        });
    });
};

$(player.init);
