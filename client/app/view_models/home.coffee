adapters = require 'helpers/adapters'


module.exports = class HomeViewModel
  constructor: ->
    _.bindAll(@, 'search')
    @search_query = ko.observable()
    @error_msg = ko.observable()
  search: ->
    query = @search_query()
    console.log @search_query()
    if query.length == 11
      url = "https://gdata.youtube.com/feeds/api/videos/#{query}?v=2&alt=jsonc"
    else if query.length > 11
      cut = query.indexOf('?v=')
      id = query.substr(cut+3, cut+14)
      url = "https://gdata.youtube.com/feeds/api/videos/#{id}?v=2&alt=jsonc"
      console.log url
    else
      @error_msg("Invaid input")
      return
    $.ajax _.extend({type: 'GET', url: url}, adapters.jqCallback (err, data) =>
      if !err && data
        data = JSON.parse(data) if data and _.isString(data) # firefox
        if data.error
          @error_msg(data.error.message)
        else
          # console.log (data.data.id)
          window.location.href = "/watch?v=#{data.data.id}"
      else @error_msg("Video not found!")
    )