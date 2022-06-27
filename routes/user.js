// user router
const express = require("express");
const router = express.Router();
// const userController = require("../controllers/user");
// const { body } = require("express-validator");
// const isAuth = require("../middleware/is-auth");

// // /user/login => GET
// router.get("/login", userController.getLogin);
// // /user/login => POST
// router.post(
//     "/login",
//     [
//         body("email")
//             .isEmail()
//             .withMessage("Please enter a valid email address.")
//             .normalizeEmail()
//             .trim(),
//         body("password")
//             .isLength({ min: 6 })
//             .withMessage("Password must be at least 6 characters long.")
//             .trim()
//     ],
//     userController.postLogin
// );
// // /user/register => GET
// router.get("/register", userController.getRegister);
// // /user/register => POST
// router.post(
//     "/register",
//     [
//         body("name")
//             .isString()
//             .isLength({ min: 3 })
//             .trim(),
//         body("email")
//             .isEmail()
//             .withMessage("Please enter a valid email address.")
//             .normalizeEmail()
//             .trim(),
//         body("password")
//             .isLength({ min: 6 })
//             .withMessage("Password must be at least 6 characters long.")    
//             .trim(),
//         body("confirmPassword")
//             .isLength({ min: 6 })
//             .withMessage("Password must be at least 6 characters long.")
//             .custom((value, { req }) => {
//                 if (value !== req.body.password) {
//                     throw new Error("Passwords don't match!");
//                 }
//                 return true;
//             }
//             )
//             .trim()
//     ],
//     userController.postRegister
// );
// // /user/logout => GET
// router.get("/logout", isAuth, userController.getLogout);
// // /user/profile => GET
// router.get("/profile", isAuth, userController.getProfile);
// // /user/delete-account => POST
// router.post("/delete-account", isAuth, userController.postDeleteAccount);
// // /user/change-password => POST
// router.post(
//     "/change-password",
//     [
//         body("oldPassword")
//             .isLength({ min: 6 })
//             .withMessage("Password must be at least 6 characters long.")
//             .trim(),
//         body("newPassword")
//             .isLength({ min: 6 })
//             .withMessage("Password must be at least 6 characters long.")
//             .trim(),
//         body("confirmPassword")
//             .isLength({ min: 6 })
//             .withMessage("Password must be at least 6 characters long.")
//             .custom((value, { req }) => {
//                 if (value !== req.body.newPassword) {
//                     throw new Error("Passwords don't match!");
//                 }
//                 return true;
//             }
//             )
//             .trim()
//     ],
//     isAuth,
//     userController.postChangePassword
// );
// // /user/forgot-password => GET
// router.get("/forgot-password", userController.getForgotPassword);
// // /user/forgot-password => POST
// router.post(
//     "/forgot-password",
//     [
//         body("email")
//             .isEmail()
//             .withMessage("Please enter a valid email address.")
//             .normalizeEmail()
//             .trim()
//     ],
//     userController.postForgotPassword
// );


module.exports = router;