
const routes = module.exports = require('next-routes')()
 
routes
.add('about')
.add('products', '/products/[slug]/:slug')