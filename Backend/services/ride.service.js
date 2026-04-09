const rideModel = require("../models/ride.model");
const mapService = require("../services/maps.service");

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  const distanceTime = await mapService.getDistanceTime(pickup, destination);
  const distanceInKm = Number(distanceTime?.distance?.value) / 1000;
  const durationInMinutes = Number(distanceTime?.duration?.value) / 60;

  if (!Number.isFinite(distanceInKm) || !Number.isFinite(durationInMinutes)) {
    throw new Error("Unable to calculate fare");
  }

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
      distanceInKm * perKmRate.car +
      durationInMinutes * perMinuteRate.car,
    auto:
      baseFare.auto +
      distanceInKm * perKmRate.auto +
      durationInMinutes * perMinuteRate.auto,
    motorcycle:
      baseFare.motorcycle +
      distanceInKm * perKmRate.motorcycle +
      durationInMinutes * perMinuteRate.motorcycle,
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

  if (typeof user !== "string") {
    user = String(user);
  }

  const fare = await getFare(pickup, destination);

  if (fare[vehicleType] == null) {
    throw new Error("Invalid vehicle type");
  }

  const ride = await rideModel.create({
    user,
    pickup,
    destination,
    fare: fare[vehicleType],
  });

  return ride;
};
