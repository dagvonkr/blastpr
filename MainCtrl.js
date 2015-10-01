var Files = require('./Files.js');

module.exports = {

	create: function(req, res) {
		var newFiles = new Files(req.body);

		newProduct.save(function(err, res) {
			if (err) {
				return res.status(500).send(err)
			} else {
				res.send(res);
			}

		});
	},

	read: function(req, res) {
		Files.find({})
		.exec(function(err, res){
			if(err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	}



}