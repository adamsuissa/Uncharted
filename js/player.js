/**
 * Created by User on 2/22/2016.
 */

player = {};
player.songid = '298';
player.song = { liked: false };
player.playing = false;

player.init = function () {
    SC.initialize({
        client_id: '27bcac07db1cde6ee2ff5f3ad8d79969'
    });
    $('.skip-btn-hover').on('click', player.playSong);
    $('.play-btn-hover').on('click', function () {
        $("#audio-test")[0].play();
    });
    $('.redheart').on('click', client.likeSong);
    $('.pause-btn').on('click', function () {
        $("#audio-test")[0].pause();
    });
};

player.playSong = function () {
    client.getSong(function (sobj) {
        player.songid = sobj.song_id;
        player.song = sobj;
        simage = sobj.song_image || sobj.user_image || '';
        $('.artwork').attr('src', simage);
        SC.get("/tracks/" + player.songid).then(function(sound) {
            $('.title').text(sobj.song_title);
            $('.artist').text(sobj.user_name);
            var url = sound.stream_url + "?client_id=27bcac07db1cde6ee2ff5f3ad8d79969";
            player.song.url = url;
            player.song.liked = false;
            $("#audio-test").attr("src", url);
            $("#audio-test")[0].play();
            player.playing = true;
        });
    });
};

$(player.init);
