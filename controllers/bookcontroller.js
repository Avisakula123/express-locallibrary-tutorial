const Book = require('../models/book');

exports.index = function(req, res) {
    res.send('Rohith Reddy: Site Home Page');
};

// Display list of all books.
exports.book_list = function(req, res) {
    res.send('Rohith Reddy: Book list');
};

// Display detail page for a specific book.
exports.book_detail = function(req, res) {
    res.send('Rohith Reddy: Book detail: ' + req.params.id);
};

// Display book create form on GET.
exports.book_create_get = function(req, res) {
    res.send('Rohith Reddy: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = function(req, res) {
    res.send('Rohith Reddy: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = function(req, res) {
    res.send('Rohith Reddy: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = function(req, res) {
    res.send('Rohith Reddy: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = function(req, res) {
    res.send('Rohith Reddy: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function(req, res) {
    res.send('Rohith Reddy: Book update POST');
};