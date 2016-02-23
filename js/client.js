
var client = client || {};

client.getSong = function (success) {
    var song = '';
    $.get('/song', function (data) {
        song = data['song-id'];
        success(song)
    });
};

client.likeSong = function() {
    console.log('yo');
    $.post("/likesong", { 'song-id': player.songid });
};