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
import random
from google.appengine.ext import ndb
import json


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
        id = self.request.get('id')
        new_song = Song()
        new_song.populate(id=int(id), song_title=song_title, song_id=int(song_id), user_name=user_name, user_id=int(user_id),
                          user_image=user_image, song_image=song_image, song_url=song_url, likes=0)
        new_song.put()


class Index(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('pages/playeredo.html')
        self.response.write(template.render())


class UpdateSongLikes(webapp2.RequestHandler):

    def post(self):
        song_id = self.request.get('song-id')

        # find_song_qry = Song.query(Song.song_id == song_id)
        #likes = ndb.gql("SELECT likes FROM Song WHERE song_id = %s" % song_id )
        qry = Song.query(Song.song_id == int(song_id)).fetch(1)[0]
        likes = qry.likes + 1
        qry.likes = likes
        qry.put()


class GetSong(webapp2.RequestHandler):
    def get(self):
        size = 200 # todo: make dynamic query
        random_id = random.randint(0, size-1)

        # song_query = ndb.gql("SELECT song_id FROM Song where id=%s" % song_choice).fetch(1)
        # song_query = ndb.gql("SELECT song_id FROM Song LIMIT 1").fetch(1)

        qry = Song.query(Song.id == random_id).fetch(1)[0]

        self.response.headers['Content-Type'] = 'application/json'
        obj = { 'song_id': qry.song_id,
                'id': qry.id,
                'song_title': qry.song_title,
                'user_name': qry.user_name,
                'user_id': qry.user_id,
                'user_image': qry.user_image,
                'song_image': qry.song_image,
                'song_url': qry.song_url,
                'likes': qry.likes }
        self.response.out.write(json.dumps(obj))


class WorkAroundHandler(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('workaround.html')
        self.response.write(template.render())


class PlayerJS(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('js/player.js')
        self.response.write(template.render())

app = webapp2.WSGIApplication([
    ('/', Index),
    ('/song', GetSong),
    ('/likesong', UpdateSongLikes),
    ('/savesong', SaveSong),
    ('/populateDB', WorkAroundHandler),
    ('/js/player.js', PlayerJS)
], debug=True)

