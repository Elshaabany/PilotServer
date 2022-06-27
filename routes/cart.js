// // cart router
const express = require("express");
const router = express.Router();
// const cartController = require("../controllers/cart");
// const { body } = require("express-validator");
// const isAuth = require("../middleware/is-auth");

// // /cart/add-to-cart => POST
// router.post(
//     "/add-to-cart",
//     [
//         body("productId")
//             .isString()
//             .isLength({ min: 1 })
//             .trim()
//     ],
//     isAuth,
//     cartController.postAddToCart
// );
// // /cart/get-cart => GET
// router.get("/get-cart", isAuth, cartController.getCart);
// // /cart/delete-from-cart => POST
// router.post("/delete-from-cart", isAuth, cartController.postDeleteFromCart);
// // /cart/update-cart => POST
// router.post("/update-cart", isAuth, cartController.postUpdateCart);
// // /cart/checkout => GET
// router.get("/checkout", isAuth, cartController.getCheckout);
// // /cart/checkout => POST
// router.post("/checkout", isAuth, cartController.postCheckout);


module.exports = router;