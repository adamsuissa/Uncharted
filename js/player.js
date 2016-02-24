/**
 * Created by User on 2/22/2016.
 */

player = {};
player.songid = '47506486';
player.song = { liked: false };
player.playing = false;

player.init = function () {
    SC.initialize({
        client_id: '27bcac07db1cde6ee2ff5f3ad8d79969'
    });
    $('.skip-btn').on('click', player.playSong);
    $('.play-btn').on('click', function () {
        $("#audio-test")[0].play();
        $('.play-btn').addClass('hidden');
        $('.pause-btn').removeClass('hidden');
    });
    //$('.redheart').on('click', client.likeSong);
    $('.heart').on('click', client.likeSong);
    $('.pause-btn').on('click', function () {
        $("#audio-test")[0].pause();
        $('.play-btn').removeClass('hidden');
        $('.pause-btn').addClass('hidden');
    });
};

player.playSong = function () {
    console.log('playsong');
    client.getSong(function (sobj) {
        player.songid = sobj.song_id;
        player.song = sobj;
        simage = sobj.song_image || sobj.user_image || '';
        $('.artwork').attr('src', simage);
        console.log('getsong');
        SC.get("/tracks/" + player.songid).then(function(sound) {
            console.log(sobj.song_title);
            $('.title').text(sobj.song_title);
            $('.artist').text(sobj.user_name);
            var url = sound.stream_url + "?client_id=27bcac07db1cde6ee2ff5f3ad8d79969";
            player.song.url = url;
            player.song.liked = false;
            $("#audio-test").attr("src", url);
            $("#audio-test")[0].play();
            player.playing = true;
            $('.play-btn').addClass('hidden');
            $('.pause-btn').removeClass('hidden');
        });
    });
};

$(player.init);
