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
window.require.register("views/video", function(exports, require, module) {
  module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
  attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
  var buf = [];
  with (locals || {}) {
  var interp;
  buf.push('<div data-bind="with: video"><h3 data-bind="text: title"></h3><span data-bind="text: viewCount + \' views | \'"></span><span data-bind="text: likeCount + \' likes\'"></span><iframe data-bind="attr : {src: \'http://www.youtube.com/embed/\' + id}"></iframe><div id="disqus_thread"></div><script>var disqus_shortname = \'commentyoutube\'; // required: replace example with your forum shortname\nvar disqus_identifier = \'cyt_' + escape((interp = id) == null ? '' : interp) + '\';\nvar disqus_url = \'http://comment-youtube.heroku.com/watch?v=' + escape((interp = id) == null ? '' : interp) + '\';\n(function() {\n  var dsq = document.createElement(\'script\'); dsq.type = \'text/javascript\'; dsq.async = true;\n  dsq.src = \'http://\' + disqus_shortname + \'.disqus.com/embed.js\';\n  (document.getElementsByTagName(\'head\')[0] || document.getElementsByTagName(\'body\')[0]).appendChild(dsq);\n})();</script></div>');
  }
  return buf.join("");
  };
});
