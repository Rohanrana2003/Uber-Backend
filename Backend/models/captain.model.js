const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minLength: [3, "Firstname must be 3 character long"],
    },
    lastname: {
      type: String,
      minLength: [3, "Lastname must be 3 character long"],
    },
  },
  email: {
    type: String,
    require: true,
    unique: true,
    minLength: [5, "Email must be atleast 3 character long"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  SocketId: {
    type: String,
  },

  status: { type: String, enum: ["active", "inactive"], default: "inactive" },

  vehicle: {
    color: {
      type: String,
      required: true,
      minLength: [3, "Color must be atleast 3 character long"],
    },
    plate: {
      type: String,
      required: true,
      minLength: [3, "Color must be atleast 3 character long"],
    },
    capacity: {
      type: Number,
      required: true,
      minLength: [3, "Capacity must be atleast 1"],
    },
    veichleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
    location: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
  },
});

captainSchema.methods.generateAuthToken = () => {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  return token;
};

captainSchema.methods.comparePasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const captianModel = mongoose.model("Captain", captainSchema);

module.exports = captianModel;
