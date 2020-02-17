'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Helpers = use('Helpers')

const Next = use('Adonis/Addons/Next');
const handler = Next.getRequestHandler();

Route.group(() => {
    Route.post('auth/login', 'Auth/LoginController.store')
})
.prefix('admin/api/v1')
.namespace('Admin')
.as('admin')

Route.group(() => {
    Route.get('/', 'DashboardController.index')

    Route.get('/user/count', 'UserController.count')
    Route.resource('user', 'UserController')
    Route.resource('user.address', 'UserAddressController')

    Route.get('/category/all', 'CategoryController.all')
    Route.resource('category', 'CategoryController')

    Route.get('/role/all', 'RoleController.all')
    Route.resource('role', 'RoleController')
    Route.resource('page', 'PageController')
    Route.resource('product', 'ProductController')

    Route.resource('product.images', 'ProductImageController').apiOnly()
    Route.resource('product.group', 'ProductGroupController').apiOnly()
    Route.resource('product.group.option', 'ProductGroupOptionController').apiOnly()

    Route.resource('product.option', 'ProductOptionController').apiOnly()
    Route.resource('banner', 'BannerController').apiOnly()

    Route.get('/order/count', 'OrderController.count')
    Route.get('/order/total', 'OrderController.total')
    Route.resource('order', 'OrderController').apiOnly()

    Route.resource('paymentMethod', 'PaymentMethodController').apiOnly()
    Route.resource('orderState', 'OrderStateController').apiOnly()
    Route.resource('page', 'PageController').apiOnly()

    Route.get('/setting/getAll', 'SettingController.getAll')
    Route.resource('setting', 'SettingController').apiOnly()
    Route.resource('neighborhood', 'NeighborhoodController').apiOnly()
    Route.resource('creditRule', 'CreditRuleController').apiOnly()
    Route.resource('voucher', 'VoucherController').apiOnly()
})
.prefix('admin/api/v1')
.namespace('Admin')
// .middleware(['auth'])
.as('admin')


Route.get('image/uploads', ({ request, response }) => {
    const path = request.get().src
    return response.download(Helpers.tmpPath(`uploads/${path}`))
})

Route.group(() => {
    Route.post('auth/facebook', 'Auth/LoginController.facebook')
    Route.post('auth/login', 'Auth/LoginController.store')
    Route.post('auth/forgotPassword', 'Auth/ForgotPasswordController.store')
    Route.post('auth/recoverPassword', 'Auth/RecoverPasswordController.store')

    Route.resource('auth/register', 'Auth/RegisterController').only(['store'])
    Route.resource('product', 'ProductController').only(['index', 'show'])
    Route.resource('category', 'CategoryController').only(['index', 'show'])
    Route.resource('paymentMethod', 'PaymentMethodController').apiOnly()
    Route.resource('orderState', 'OrderStateController').apiOnly()
    Route.resource('setting', 'SettingController').apiOnly()
    Route.resource('page', 'PageController').apiOnly(['index', 'show'])
    Route.resource('neighborhood', 'NeighborhoodController').apiOnly(['index'])
    Route.resource('credit', 'CreditController').apiOnly(['index' ,'show'])
})
.prefix('api/v1')
.namespace('Api')
.as('api')

Route.group(() => {
    Route.post('cart/add-voucher', 'CartController.addVoucher')
    Route.resource('cart', 'CartController').only(['index', 'store', 'update'])
    Route.resource('cart.product', 'CartProductController').only(['update', 'destroy'])
    Route.patch('/order/cancel/:id', 'OrderController.cancel')
    Route.resource('order', 'OrderController').only(['index', 'show', 'store'])
    Route.resource('checkout', 'CheckoutController').apiOnly()
    Route.patch('setPushToken', 'ProfileController.setPushToken')
    Route.patch('profile/changePassword', 'ProfileController.changePassword')
    Route.resource('profile', 'ProfileController').apiOnly()
    Route.patch('/myAddress/set-default/:id', 'MyAddressController.setDefault')
    Route.resource('myAddress', 'MyAddressController').apiOnly()
    Route.resource('voucher', 'VoucherController').only(['index'])
})
.prefix('api/v1')
.namespace('Api')
.middleware(['auth'])
.as('api')

Route.any('admin', ({ response }) => {
    return response.download(Helpers.publicPath('react/app.html'));
});

Route.get(
    '*',
    ({ request, response }) =>
      new Promise((resolve, reject) => {
        handler(request.request, response.response, promise => {
          promise.then(resolve).catch(reject);
        });
      })
);
  