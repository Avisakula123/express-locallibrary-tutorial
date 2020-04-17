const Author = require('../models/author');

// Display list of all Authors.
exports.author_list = function(req, res) {
    res.send('Rohith Reddy');
};

// Display detail page for a specific Author.
exports.author_detail = function(req, res) {
    res.send('Rohith Reddy: Author detail: ' + req.params.id);
};

// Display Author create form on GET.
exports.author_create_get = function(req, res) {
    res.send('Rohith Reddy : Author create GET');
};

// Handle Author create on POST.
exports.author_create_post = function(req, res) {
    res.send('Rohith Reddy: Author create POST');
};

// Display Author delete form on GET.
exports.author_delete_get = function(req, res) {
    res.send('Rohith Reddy: Author delete GET');
};

// Handle Author delete on POST.
exports.author_delete_post = function(req, res) {
    res.send('Rohith Reddy: Author delete POST');
};

// Display Author update form on GET.
exports.author_update_get = function(req, res) {
    res.send('Rohith Reddy: Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = function(req, res) {
    res.send('Rohith Reddy: Author update POST');
};