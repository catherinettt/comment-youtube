(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.brunch = true;
})();

window.require.register("helpers/adapters", function(exports, require, module) {
  var _;

  _ = this._ || require('underscore');

  exports.jqCallback = function(callback) {
    return {
      success: function() {
        return callback.apply(this, [null].concat(_.toArray(arguments)));
      },
      error: function(resp) {
        return callback(resp || [new Error("error received")]);
      }
    };
  };
  
});
window.require.register("helpers/knockout-extenstions", function(exports, require, module) {
  

  
});
window.require.register("helpers/require_template_engine", function(exports, require, module) {
  var RequireTemplateEngine, RequireTemplateSource,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  RequireTemplateSource = (function() {

    function RequireTemplateSource(template, binding_context) {
      this.template = template;
      this.binding_context = binding_context != null ? binding_context : {};
    }

    RequireTemplateSource.prototype.data = function(key, value) {
      if (arguments.length === 1) {
        return this.binding_context[key];
      }
      return this.binding_context[key] = value;
    };

    RequireTemplateSource.prototype.text = function() {
      if (arguments.length > 0) {
        throw 'TemplateSource: unexpected writing to template source';
      }
      return this.template(this.binding_context);
    };

    return RequireTemplateSource;

  })();

  module.exports = RequireTemplateEngine = (function(_super) {

    __extends(RequireTemplateEngine, _super);

    function RequireTemplateEngine() {
      this.allowTemplateRewriting = false;
    }

    RequireTemplateEngine.prototype.makeTemplateSource = function(template_name) {
      var template;
      try {
        template = require(template_name);
      } catch (e) {

      }
      if (template) {
        return new RequireTemplateSource(template);
      } else {
        return RequireTemplateEngine.__super__.makeTemplateSource.apply(this, arguments);
      }
    };

    RequireTemplateEngine.prototype.renderTemplateSource = function(template_source, binding_context, options) {
      var key, value;
      for (key in binding_context) {
        value = binding_context[key];
        template_source.data(key, value);
      }
      return RequireTemplateEngine.__super__.renderTemplateSource.apply(this, arguments);
    };

    return RequireTemplateEngine;

  })(ko.nativeTemplateEngine);
  
});
window.require.register("initialize", function(exports, require, module) {
  var TemplateEngine;

  TemplateEngine = require('helpers/require_template_engine');

  ko.setTemplateEngine(new TemplateEngine());

  window.HomeViewModel = require('view_models/home');
  
});
window.require.register("view_models/home", function(exports, require, module) {
  var HomeViewModel, adapters;

  adapters = require('helpers/adapters');

  module.exports = HomeViewModel = (function() {

    function HomeViewModel() {
      _.bindAll(this, 'search');
      this.search_query = ko.observable();
      this.error_msg = ko.observable();
    }

    HomeViewModel.prototype.search = function() {
      var cut, id, query, url,
        _this = this;
      query = this.search_query();
      console.log(this.search_query());
      if (query.length === 11) {
        url = "https://gdata.youtube.com/feeds/api/videos/" + query + "?v=2&alt=jsonc";
      } else if (query.length > 11) {
        cut = query.indexOf('?v=');
        id = query.substr(cut + 3, cut + 14);
        url = "https://gdata.youtube.com/feeds/api/videos/" + id + "?v=2&alt=jsonc";
        console.log(url);
      } else {
        this.error_msg("Invaid input");
        return;
      }
      return $.ajax(_.extend({
        type: 'GET',
        url: url
      }, adapters.jqCallback(function(err, data) {
        if (!err && data) {
          if (data && _.isString(data)) {
            data = JSON.parse(data);
          }
          if (data.error) {
            return _this.error_msg(data.error.message);
          } else {
            return window.location.href = "/watch?v=" + data.data.id;
          }
        } else {
          return _this.error_msg("Video not found!");
        }
      })));
    };

    return HomeViewModel;

  })();
  
});
window.require.register("view_models/video", function(exports, require, module) {
  

  
});
