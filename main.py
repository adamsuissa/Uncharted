#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import os
import webapp2
import jinja2
from google.appengine.ext import ndb



JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)


class Song(ndb.Model):
    id = ndb.IntegerProperty()
    song_title = ndb.StringProperty()
    song_id = ndb.IntegerProperty()
    user_name = ndb.StringProperty()
    user_id = ndb.IntegerProperty()
    user_image = ndb.StringProperty()
    song_image = ndb.StringProperty()
    song_url = ndb.StringProperty()
    likes = ndb.IntegerProperty()



    # # def post(self):
    #     song_title = self.request.get('song-title')
    #     song_id = self.request.get('song-id')
    #     user_name = self.request.get('user-name')
    #     user_id = self.request.get('user-id')
    #     user_image = self.request.get('user-name')
    #     song_image = self.request.get('song-image')
    #     song_url = self.request.get('song-url')
    #
    #     new_song = Song()
    #     new_song.populate(song_title=song_title, song_id=song_id, user_name=user_name, user_id=user_id, user_image=user_image, song_image=song_image, song_url=song_url)
    #     new_song.put()


class SaveSong(webapp2.RequestHandler):

    def post(self):
        song_title = self.request.get('song-title')
        song_id = self.request.get('song-id')
        user_name = self.request.get('user-name')
        user_id = self.request.get('user-id')
        user_image = self.request.get('user-image')
        song_image = self.request.get('song-image')
        song_url = self.request.get('song-url')

        new_song = Song()
        new_song.populate(song_title=song_title, song_id=song_id, user_name=user_name, user_id=user_id,
                          user_image=user_image, song_image=song_image, song_url=song_url)
        new_song.put()

    # new_song = Song()
    # new_song.populate(song_title='a song', song_id=12345, user_name='Max Prais', user_id=76442, song_url='https://api.soundcloud.com/tracks/248316104/stream')
    # new_song.put()


class SoundcloudUsersHandler(webapp2.RequestHandler):
    def get(self):

        song_query = ndb.gql("SELECT * FROM Song").fetch(100)

        template = JINJA_ENVIRONMENT.get_template('pages/player.html')
        self.response.write(template.render({"tracks": song_query}))


class UpdateSongLikes(webapp2.RequestHandler):
    def post(self):
        song_id = self.request.get('song-id')

        find_song_qry = Song.query(Song.id == song_id)
        song = Song()


app = webapp2.WSGIApplication([
    ('/song', SoundcloudUsersHandler),
    ('/savesong', SaveSong),


], debug=True)

