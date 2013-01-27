window.require.register("views/home", function(exports, require, module) {
  module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
  attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
  var buf = [];
  with (locals || {}) {
  var interp;
  buf.push('<h5 data-bind="visible: error_msg, text: error_msg" class="alert"></h5><p>Enter Youtube ID or URL here</p><form class="form-search"><input type="text" data-bind="value: search_query"/><a data-bind="click : search" class="btn">Search</a></form><div data-bind="visible: trending, template: \'views/trending\'"></div>');
  }
  return buf.join("");
  };
});
window.require.register("views/trending", function(exports, require, module) {
  module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
  attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
  var buf = [];
  with (locals || {}) {
  var interp;
  buf.push('<a href="watch?v=8rQGMW7nt4s#disqus_thread">Link </a><script>/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */\nvar disqus_shortname = \'commentyoutube\'; // required: replace example with your forum shortname\n\n/* * * DON\'T EDIT BELOW THIS LINE * * */\n(function () {\n    var s = document.createElement(\'script\'); s.async = true;\n    s.type = \'text/javascript\';\n    s.src = \'http://\' + disqus_shortname + \'.disqus.com/count.js\';\n    (document.getElementsByTagName(\'HEAD\')[0] || document.getElementsByTagName(\'BODY\')[0]).appendChild(s);\n}());</script>');
  }
  return buf.join("");
  };
});
