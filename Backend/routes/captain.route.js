const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middlewares/auth.middleware");

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
    body("veiche.color")
      .isLength({ min: 3 })
      .withMessage("Color must be atleast 3 characters long"),
    body("veiche.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be atleast 3 characters long"),
    body("veiche.capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity must be atleast 1"),
    body("veiche.veichleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Veichle Type must be atleast 6 characters long"),
  ],
  captainController.register,
);

module.exports = router;
