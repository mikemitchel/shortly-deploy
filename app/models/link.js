var db = require('../config');
var crypto = require('crypto');

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


var Link = db.Model.extend({
  tableName: 'urls',
  hasTimestamps: true,
  defaults: {
    visits: 0
  },
  initialize: function(){
    this.on('creating', function(model, attrs, options){
      var shasum = crypto.createHash('sha1');
      shasum.update(model.get('url'));
      model.set('code', shasum.digest('hex').slice(0, 5));
    });
  }
});



module.exports = Link;
