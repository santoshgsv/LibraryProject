var express = require('express');
var router = express.Router();

var book = require('../models/book');

router.route('/books/:location').get(function (req, res) {

    book.findById(req.params.location, function (err, book) {
        if (err)
            res.send(err);
        res.json(book);
    });
});
module.exports = router;