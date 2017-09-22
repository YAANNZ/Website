var express = require('express');
var router = express.Router();

router.get('/:name', function(req, res) {
	res.send('user ' + req.params.name);
});

module.exports = router;