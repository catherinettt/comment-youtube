Video = require './video'

module.exports = class Videos extends Backbone.Collection
  url: '/products'
  model: Video
  localStorage: new Backbone.LocalStorage("commentyoutube")
