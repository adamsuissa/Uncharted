
var client = client || {};

client.getSong = function (success) {
    $.get('/song', function (data) {
        var song = {};
        song.song_id = data.song_id;
        song.id = data.id;
        song.song_title = data.song_title;
        song.user_name = data.user_name;
        song.user_id = data.user_id;
        song.user_image = data.user_image;
        song.song_image = data.song_image;
        song.song_url = data.song_url;
        song.likes = data.likes;

        client.liked = false;
        success(song);
    });
};

client.likeSong = function() {
    if (!client.liked) {
        $.post("/likesong", {'song-id': player.songid});
        client.liked = true;
    }
};