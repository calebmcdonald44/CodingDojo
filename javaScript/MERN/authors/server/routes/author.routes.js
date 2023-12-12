const AuthorController = require('../controllers/author.controller')
module.exports = function(app) {
    app.get('/api', AuthorController.index);
    app.get('/api/author', AuthorController.findAllAuthors);
    app.get('/api/author/:id', AuthorController.findOneAuthor);
    app.post('/api/author', AuthorController.createAuthor);
    app.patch('/api/author/:id', AuthorController.updateAuthor)
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}