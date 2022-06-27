// exports.getLogin = (req, res, next) => {
//     res.render("login", {
//         pageTitle: "Login",
//         path: "/login"
//     });
// }
// exports.postLogin = (req, res, next) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     User.findOne({ email: email })
//         .then(user => {
//             if (!user) {
//                 return next(new Error("Invalid email or password."));
//             }
//             bcrypt.compare(password, user.password)
//                 .then(document => {
//                     if (!document) {
//                         return next(new Error("Invalid email or password."));
//                     }
//                     req.session.user = user;
//                     req.session.isLoggedIn = true;
//                     req.session.save(err => {
//                         res.redirect("/");
//                     });
//                 }).catch(err => {
//                     const error = new Error(err);
//                     error.httpStatusCode = 500;
//                     return next(error);
//                 }).populate("orders");
//         }).catch(err => {
//             const error = new Error(err);
//             error.httpStatusCode = 500;
//             return next(error);
//         }).populate("orders");
// }
// exports.postLogout = (req, res, next) => {
//     req.session.destroy();
//     res.redirect("/");
// }
// exports.getRegister = (req, res, next) => {
//     res.render("register", {
//         pageTitle: "Register",
//         path: "/register"
//     });
// }
// exports.postRegister = (req, res, next) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//     const confirmPassword = req.body.confirmPassword;
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(422).render("register", {
//             path: "/register",
//             pageTitle: "Register",
//             errorMessage: errors.array()[0].msg
//         });
//     }
//     bcrypt.hash(password, 12)
//         .then(hashedPassword => {
//             const user = new User({
//                 name: name,
//                 email: email,
//                 password: hashedPassword,
//                 cart: { items: [] }
//             });
//             return user.save();
//         }).then(result => {
//             res.redirect("/login");
//         }).catch(err => {
//             const error = new Error(err);
//             error.httpStatusCode = 500;
//             return next(error);
//         }).populate("orders");
// }

// exports.getProfile = (req, res, next) => {
//     const user = req.user;
//     res.render("profile", {
//         pageTitle: "Profile",
//         path: "/profile",
//         user: user
//     });
// }

// exports.postDeleteAccount = (req, res, next) => {
//     const user = req.user;
//     User.deleteOne({ _id: user._id })
//         .then(() => {
//             req.session.destroy();
//             res.redirect("/");
//         }).catch(err => {
//             const error = new Error(err);
//             error.httpStatusCode = 500;
//             return next(error);
//         }).populate("orders");
// }

// exports.postChangePassword = (req, res, next) => {
//     const user = req.user;
//     const oldPassword = req.body.oldPassword;
//     const newPassword = req.body.newPassword;
//     const confirmPassword = req.body.confirmPassword;
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(422).render("profile", {
//             path: "/profile",
//             pageTitle: "Profile",
//             errorMessage: errors.array()[0].msg
//         });
//     }
//     bcrypt.compare(oldPassword, user.password)
//         .then(document => {
//             if (!document) {
//                 return next(new Error("Invalid old password."));
//             }
//             bcrypt.hash(newPassword, 12)
//                 .then(hashedPassword => {
//                     user.password = hashedPassword;
//                     return user.save();
//                 }).then(result => {
//                     res.redirect("/profile");
//                 }).catch(err => {
//                     const error = new Error(err);
//                     error.httpStatusCode = 500;
//                     return next(error);
//                 }).populate("orders");
//         }).catch(err => {
//             const error = new Error(err);
//             error.httpStatusCode = 500;
//             return next(error);
//         }).populate("orders");
// }

// exports.getForgotPassword = (req, res, next) => {
//     res.render("forgotPassword", {
//         pageTitle: "Forgot Password",
//         path: "/forgotPassword"
//     });
// }

// exports.postForgotPassword = (req, res, next) => {
//     const email = req.body.email;
//     User.findOne({ email: email })
//         .then(user => {
//             if (!user) {
//                 return next(new Error("Invalid email."));
//             }
//             const token = crypto.randomBytes(32).toString("hex");
//             user.resetToken = token;
//             user.expireToken = Date.now() + 3600000;
//             user.save()
//                 .then(result => {
//                     const transporter = nodemailer.createTransport({
//                         service: "gmail",
//                         auth: {
//                             user: "",
//                             pass: ""
//                         }
//                     });
//                     const mailOptions = {
//                         from: "",
//                         to: user.email,
//                         subject: "Password Reset",
//                         text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
//                             Please click on the following link, or paste this into your browser to complete the process:\n\n
//                             http://${req.headers.host}/resetPassword/${token}\n\n
//                             If you did not request this, please ignore this email and your password will remain unchanged.\n`
//                     };
//                     transporter.sendMail(mailOptions, (err, info) => {
//                         if (err) {
//                             return next(err);
//                         }
//                         res.redirect("/forgotPassword");
//                     });
//                 }).catch(err => {
//                     const error = new Error(err);
//                     error.httpStatusCode = 500;
//                     return next(error);
//                 }).populate("orders");
//         }).catch(err => {
//             const error = new Error(err);
//             error.httpStatusCode = 500;
//             return next(error);
//         }).populate("orders");
// }

