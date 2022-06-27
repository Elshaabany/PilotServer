// order router
const express = require("express");
const router = express.Router();
// const orderController = require("../controllers/order");
// const { body } = require("express-validator");
// const isAuth = require("../middleware/is-auth");

// // /order/get-orders => GET
// router.get("/get-orders", isAuth, orderController.getOrders);
// // /order/get-order => GET
// router.get("/get-order/:orderId", isAuth, orderController.getOrder);
// // /order/create-order => POST
// router.post(
//     "/create-order",
//     [
//         body("name")
//             .isString()
//             .isLength({ min: 3 })
//             .trim(),
//         body("address")
//             .isString()
//             .isLength({ min: 5 })
//             .trim(),
//         body("phone")
//             .isString()
//             .isLength({ min: 5 })
//             .trim(),
//         body("email")
//             .isEmail()
//             .withMessage("Please enter a valid email address.")
//             .normalizeEmail()
//             .trim(),
//         body("products")

//     ],
//     isAuth,
//     orderController.postCreateOrder
// );
// // /order/delete-order => POST
// router.post("/delete-order", isAuth, orderController.postDeleteOrder);
// // /order/edit-order => POST
// router.post("/edit-order", isAuth, orderController.postEditOrder);


module.exports = router;
