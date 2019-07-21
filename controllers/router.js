var express = require("express");
var path = require("path");

var router = express.Router();

/*always send to main page
router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/../views/layouts/main.handlebars'));
});*/

router.post('/api/make', function(req, res) {

});

router.post('api/eat', function(req, res) {

});

module.exports = router;