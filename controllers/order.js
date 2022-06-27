// exports.getOrders = (req, res, next) => {
//     Order.find({user: req.user._id})
//         .then(orders => {
//             res.render("orders", {
//                 pageTitle: "Your Orders",
//                 path: "/orders",
//                 orders: orders
//             });
//         }).catch(err => {
//             const error = new Error(err);
//             error.httpStatusCode = 500;
//             return next(error);
//         }).populate("products.product");
// }

// exports.getOrder = (req, res, next) => {
//     const orderId = req.params.orderId;
//     Order.findById(orderId)
//         .then(order => {
//             if (!order) {
//                 return next(new Error("No order found."));
//             }
//             if (order.user.toString() !== req.user._id.toString()) {
//                 return next(new Error("Unauthorized"));
//             }
//             res.render("order", {
//                 pageTitle: "Order Details",
//                 path: "/order/" + orderId,
//                 order: order
//             });
//         }).catch(err => {
//             const error = new Error(err);
//             error.httpStatusCode = 500;
//             return next(error);
//         }).populate("products.product");
// }

// exports.postDeleteOrder = (req, res, next) => {
//     const orderId = req.body.orderId;
//     Order.findById(orderId)
//         .then(order => {
//             if (!order) {
//                 return next(new Error("No order found."));
//             }
//             if (order.user.toString() !== req.user._id.toString()) {
//                 return next(new Error("Unauthorized"));
//             }
//             const products = order.products;
//             products.forEach(prod => {
//                 Product.findById(prod.product)
//                     .then(product => {
//                         product.quantity += prod.quantity;
//                         product.save();
//                     }).catch(err => {
//                         const error = new Error(err);
//                         error.httpStatusCode = 500;
//                         return next(error);
//                     }).populate("categories");
//             }).then(() => {
//                 order.remove();
//                 res.redirect("/orders");
//             }).catch(err => {
//                 const error = new Error(err);
//                 error.httpStatusCode = 500;
//                 return next(error);
//             }).populate("products.product");
//         }).catch(err => {
//             const error = new Error(err);
//             error.httpStatusCode = 500;
//             return next(error);
//         }).populate("products.product");
// }
