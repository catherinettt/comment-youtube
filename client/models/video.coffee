adapters = require 'helpers/adapters'

module.exports = class Video extends Backbone.Model
  
  getVideo: (id, callback) ->
    url = "https://gdata.youtube.com/feeds/api/videos/#{id}?v=2&alt=jsonc"
    $.ajax _.extend({type: 'GET', url: url}, adapters.jqCallback (err, data) =>
      return if err
      data = JSON.parse(data) if data and _.isString(data) # firefox
      callback(null, data) 
  )

