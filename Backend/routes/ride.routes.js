const express = require("express");
const router = express.Router;
const rideController = require("../controllers/ride.controller");
const { body } = require("express-validator");

router.post(
  "/create",
  body("userId")
    .isString()
    .isLength({ min: 3, max: 24 })
    .withMessage("Invalid User Id"),
  body("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid Pickup Address"),
  body("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid destination address"),
  body("vehicleType")
    .isIn(["car", "auto", "motorcycle"])
    .withMessage("Invalid vehicle type"),
  rideController.createRide,
);
