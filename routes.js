var bigdecimal = require("bigdecimal");

function round(raw, precision, mode){
	var bigD = new bigdecimal.BigDecimal(raw);
	var result = bigD.setScale(precision, mode);
	return result.toString();
}

exports.index = function(req, res){
	res.send({msg: 'welcome to mutui!'})
}


exports.calculate = function(req, res){
	// console.log(req)
	// console.log(req.body)
	console.log(req.query)
	var msrp = new bigdecimal.BigDecimal(req.query.msrp);
	var term = new bigdecimal.BigDecimal(req.query.term);
	var interest = new bigdecimal.BigDecimal(req.query.interest);
	var monthlyPayment;
	var monthlyInterst;
	var denominator;
	if (term < 1){ term = 1 };
	if (interest === 0){ console.log('here'); monthlyPayment = msrp/term }
	else {
		monthlyInterst = interest/(12)
		monthlyPayment = 0
		denominator = (1 - Math.pow((1 + monthlyInterst), -(term)));
		if (denominator !== 0){
			result = msrp * (monthlyInterst / denominator);
			console.log(result)
			monthlyPayment = round(result,2, bigdecimal.BigDecimal.ROUND_HALF_UP);
		}

	}
	// console.log(req.query.name)
	res.send({'monthly_payment': monthlyPayment})
}