const captainService = require("../services/captain.service");
const captainModel = require("../models/captain.model");
const { validationResult } = require("express-validator");

// REGISTER API
module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const isAlReadyExists = await captainModel.findOne({ email });

  if (isAlReadyExists) {
    return res.status(400).json("Captain Already Exists");
  }

  const hashPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
    color: vehicle.color,
    capacity: vehicle.capacity,
    plate: vehicle.plate,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();
  res.status(201).json({ token, captain });
};

// LOGIN API
module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email });
  if (!captain) {
    return res.status(401).json({ messae: "Invalid email or Password" });
  }

  const isMatch = await captain.comparePasswords(password);

  if (!isMatch) {
    return res.status(401).json({ messae: "Invalid email or Password" });
  }

  const token = captain.generateAuthToken();

  res.cookie("token", token);
  res.status(201).json({ token, captain });
};

module.exports.logoutCaptain = async (req, res, next) => {};
