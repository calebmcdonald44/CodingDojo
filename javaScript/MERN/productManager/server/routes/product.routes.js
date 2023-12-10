const ProductController = require('../controllers/product.controller')
module.exports = function(app) {
    app.get('/api', ProductController.index)
    app.get('/api/product', ProductController.findAllProducts)
    app.post('/api/product', ProductController.createProduct);
}