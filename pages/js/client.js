
var client = client || {};

client.getSong = function () {
    var song = '';
    $.get('/song', function (data) {
        song = data['song-id'];
    });
    return song;
};
