module.exports = class VideoViewModel
  constructor: ->
    _.bindAll(@)

    @video = JSON.parse(localStorage["commentyoutube-#{window.video_id}"])
    @id = window.video_id