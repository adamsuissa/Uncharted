/**
 * Created by User on 2/22/2016.
 */

player = {};

player.initWidget = function() {
    var widgetIframe = document.getElementById('sc-widget'),
        widget       = SC.Widget(widgetIframe);

    widget.bind(SC.Widget.Events.READY, function() {
      widget.bind(SC.Widget.Events.PLAY, function() {
        // get information about currently playing sound
        widget.getCurrentSound(function(currentSound) {
          console.log('sound ' + currentSound.get('') + 'began to play');
        });
      });
      // get current level of volume
      widget.getVolume(function(volume) {
        console.log('current volume value is ' + volume);
      });
      // set new volume level
      widget.setVolume(50);
      // get the value of the current position
    });
};


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