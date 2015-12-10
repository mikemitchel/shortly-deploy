var path = require('path');
var mongo = require('mongodb');
var db = require('mongoose');

var Schema = db.Schema;

var urlSchema = new Schema ({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number,
  timestamp: {type: Date, default: Date.now }

});

var url = db.model('Url', urlSchema);

var userSchema = new Schema ({
  username: String,
  password: String,
  timestamp: {type: Date, default: Date.now }
})

var User = db.model('User', userSchema);
