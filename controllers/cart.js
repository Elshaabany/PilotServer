// exports.postAddToCart = (req, res, next) => {
//     const productId = req.body.productId;
//     let cart = new Cart(req.session.cart ? req.session.cart : {});
//     Product.findById(productId, (err, product) => {
//         if (err) {
//             return res.redirect("/");
//         }
//         cart.add(product, product.id);
//         req.session.cart = cart;
//         res.redirect("/");
//     }).populate("category");
// }
// exports.getCart = (req, res, next) => {
//     if (!req.session.cart) {
//         return res.render("cart", {
//             products: null,
//             totalPrice: 0
//         });
//     }
//     const cart = new Cart(req.session.cart);
//     res.render("cart", {
//         products: cart.generateArray(),
//         totalPrice: cart.totalPrice
//     });
// }
// exports.postDeleteFromCart = (req, res, next) => {
//     const productId = req.body.productId;
//     let cart = new Cart(req.session.cart ? req.session.cart : {});
//     cart.removeItem(productId);
//     req.session.cart = cart;
//     res.redirect("/cart");
// }
// exports.postUpdateCart = (req, res, next) => {
//     const productId = req.body.productId;
//     const quantity = req.body.quantity;
//     let cart = new Cart(req.session.cart ? req.session.cart : {});
//     cart.updateItem(productId, quantity);
//     req.session.cart = cart;
//     res.redirect("/cart");
// }
// exports.getCheckout = (req, res, next) => {
//     if (!req.session.cart) {
//         return res.render("cart", {
//             products: null,
//             totalPrice: 0
//         });
//     }
//     const cart = new Cart(req.session.cart);
//     res.render("checkout", {
//         products: cart.generateArray(),
//         totalPrice: cart.totalPrice
//     });
// }
// exports.postCheckout = (req, res, next) => {
//     if (!req.session.cart) {
//         return res.redirect("/cart");
//     }
//     const cart = new Cart(req.session.cart);
//     const order = new Order({
//         user: req.user,
//         cart: cart,
//         address: req.body.address,
//         name: req.body.name,
//         paymentId: req.body.stripeToken
//     });
//     order.save((err, result) => {
//         req.flash("success", "Successfully bought product!");
//         req.session.cart = null;
//         res.redirect("/");
//     }).populate("user").populate("cart.items.product");
// }
