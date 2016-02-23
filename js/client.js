
var client = client || {};

client.getSong = function (success) {
    var song = {};
    $.get('/song', function (data) {
        song['song-id'] = data['song-id'];
        song.id = data.id;
        song.song_title = data.song_title;
        song.user_name = data.user_name;
        song.user_id = data.user_id;
        song.user_image = data.user_image;
        song.song_image = data.song_image;
        song.song_url = data.song_url;
        song.likes = data.likes;
    });
    success(song);
};
