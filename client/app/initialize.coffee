
TemplateEngine = require 'helpers/require_template_engine'
ko.setTemplateEngine(new TemplateEngine())

window.HomeViewModel = require 'view_models/home'

window.VideoViewModel = require 'view_models/video'