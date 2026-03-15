const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// User register
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Mail"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First Name must be atleast 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters long"),
  ],
  userController.registerUser,
);

// User Login
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Mail"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters long"),
  ],
  userController.loginUser,
);

router.post("/logout", userController.logoutUser);

router.get("/profile", authMiddleware.authUser, userController.getUserProfile);

module.exports = router;
