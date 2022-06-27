// // admin router
const express = require("express");
const router = express.Router();
// const adminController = require("../controllers/admin");
// const { body } = require("express-validator");
// const isAuth = require("../middleware/is-auth");

// // /admin/add-product => GET
// router.get("/add-product", isAuth, adminController.getAddProduct);
// // /admin/add-product => POST
// router.post(
//     "/add-product",
//     [
//         body("title")
//             .isString()
//             .isLength({ min: 3 })
//             .trim(),
//         body("price")
//             .isFloat()
//             .isLength({ min: 1 })
//             .trim(),
//         body("description")
//             .isString()
//             .isLength({ min: 5 })
//             .trim()
//     ],
//     isAuth,
//     adminController.postAddProduct
// );
// // /admin/products => GET
// router.get("/products", isAuth, adminController.getProducts);
// // /admin/edit-product => GET
// router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);
// // /admin/edit-product => POST
// router.post(
//     "/edit-product",
//     [
//         body("title")
//             .isString()
//             .isLength({ min: 3 })
//             .trim(),
//         body("price")
//             .isFloat()
//             .isLength({ min: 1 })
//             .trim(),
//         body("description")
//             .isString()
//             .isLength({ min: 5 })
//             .trim()
//     ],
//     isAuth,
//     adminController.postEditProduct
// );
// // /admin/delete-product => POST
// router.post("/delete-product", isAuth, adminController.postDeleteProduct);

module.exports = router;