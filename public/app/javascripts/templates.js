window.require.register("views/home", function(exports, require, module) {
  module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
  attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
  var buf = [];
  with (locals || {}) {
  var interp;
  buf.push('<h5 data-bind="visible: error_msg, text: error_msg" class="alert"></h5><form><label>Enter Youtube ID or URL here</label><input type="text" data-bind="value: search_query"/></form><a data-bind="click : search" class="btn">Search</a>');
  }
  return buf.join("");
  };
});
