const ProductController = require('../controllers/product.controller')
module.exports = function(app) {
    app.get('/api', ProductController.index);
    app.get('/api/product', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.post('/api/product', ProductController.createProduct);
    app.patch('/api/product/:id', ProductController.updateProduct)
    app.delete('/api/product/:id', ProductController.deleteProduct);
}