const captianModel = require("../models/captain.model");
const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  veichleType,
}) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !capacity ||
    !plate ||
    !veichleType
  ) {
    throw new Error("All feilds are required");
  }

  const captain = await captianModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    veichle: {
      color,
      plate,
      capacity,
      veichleType,
    },
  });

  return captain;
};
