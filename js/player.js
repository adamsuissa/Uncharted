
player = {};

(function (player) {

    player = player || {};
    player.songid = '47506486';
    player.song = {liked: false};
    player.playing = false;
    player.debugMode = true;
    const DEFAULT_ARTWORK = '';

    player.log = function (str) {
        if (player.debugMode) {
            console.log(str);
        }
    };

    player.init = function () {

        SC.initialize({
            client_id: '27bcac07db1cde6ee2ff5f3ad8d79969'
        });

        $('.next-btn').on('click', function () {
            player.newSong();
            player.playing = true;
        });

        $('.play-btn').on('click', function () {
            $("#audio-player")[0].play();
            player.playing = true;
        });

        $('.heart').on('click', client.likeSong);

        $('.pause-btn').on('click', function () {
            $("#audio-player")[0].pause();
            player.playing = false;
        });

    };

    player.newSong = function () {

        client.getSong(function (sobj) {

            player.log('getsong');
            player.songid = sobj.song_id;
            player.song = sobj;
            player.artwork = sobj.song_image || sobj.user_image || DEFAULT_ARTWORK;

            SC.get("/tracks/" + player.songid).then(function (sound) {
                player.log('playing: ' + sobj.user_name + ' - ' + sobj.song_title);
                $('.title').text(sobj.song_title);
                $('.artist').text(sobj.user_name);
                $('.artwork').attr('src', player.artwork);

                var url = sound.stream_url + "?client_id=27bcac07db1cde6ee2ff5f3ad8d79969";
                player.song.url = url;
                player.song.liked = false;
                player.playing = true;
                $("#audio-player").attr("src", url);
                $("#audio-player")[0].play();
            });

        });
    };

})(player);

$(player.init);
