// var bigdecimal = require("bigdecimal");

// function round(raw, precision, mode){
// 	var bigD = new bigdecimal.BigDecimal(raw);
// 	var result = bigD.setScale(precision, mode);
// 	return result.toString();
// }

exports.index = function(req, res){
	// res.send({msg: 'welcome to mutui!'})
	res.render('index', {
		title: "Comment Youtube",
		}, function (err, rendered){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(rendered);		
	})
}


exports.video = function(req, res){
	// console.log(req)
	// console.log(req.body)
	video_id = req.query.v;
	console.log(video_id)
	// console.log(req.query.name)
		res.render('video', {
		id: video_id,
		}, function (err, rendered){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(rendered);		
	})
}