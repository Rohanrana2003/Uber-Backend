const rideModel = require("../models/ride.model");
const mapService = require("../services/maps.service");

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  const distanceTime = await mapService.getDistanceTime(pickup, destination);
  const baseFare = {
    car: 50,
    auto: 30,
    motorcycle: 20,
  };

  const perKmRate = {
    car: 15,
    auto: 10,
    motorcycle: 8,
  };

  const perMinuteRate = {
    car: 2,
    auto: 1.5,
    motorcycle: 1,
  };

  const fare = {
    car:
      baseFare.car +
      distanceTime.distance * perKmRate.car +
      distanceTime.duration * perMinuteRate.car,
    auto:
      baseFare.auto +
      distanceTime.distance * perKmRate.auto +
      distanceTime.duration * perMinuteRate.auto,
    motorcycle:
      baseFare.motorcycle +
      distanceTime.distance * perKmRate.motorcycle +
      distanceTime.duration * perMinuteRate.motorcycle,
  };

  return fare;
}

module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error("All fields are required");
  }

  const fare = await getFare(pickup, destination);

  const ride = rideModel.create({
    user: user._id,
    pickup,
    destination,
    fare: fare[vehicleType],
  });

  return ride;
};
