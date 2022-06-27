// exports.getProducts = (req, res, next) => {
//     Product.find()
//         .then(products => {
//             res.render("products", {
//                 pageTitle: "Products",
//                 path: "/products",
//                 products: products
//             });
//         }).catch(err => {
//             const error = new Error(err);
//             error.httpStatusCode = 500;
//             return next(error);
//         }).populate("categories");
// }
// exports.getProduct = (req, res, next) => {
//     const productId = req.params.productId;
//     Product.findById(productId)
//         .then(product => {
//             res.render("product", {
//                 pageTitle: "Product",
//                 path: "/product/" + productId,
//                 product: product
//             });
//         }).catch(err => {
//             const error = new Error(err);
//             error.httpStatusCode = 500;
//             return next(error);
//         }).populate("categories");
// }