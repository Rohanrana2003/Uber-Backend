const axios = require("axios");

module.exports.getAddressCordinate = async (address) => {
  const API_KEY = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);

    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        lat: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error("Unable to fetch coordinates");
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new error("Origin and destination are required");
  }

  const API_KEY = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const element = response.data.rows[0].elements[0];

    console.log(response, "responseresponse", url, "url");
    console.log(response, "responseresponse");

    return {
      distance: {
        text: element.distance.text,
        value: element.distance.value,
      },
      duration: {
        text: element.duration.text,
        value: element.duration.value,
      },
      status: element.status,
    };
  } catch (error) {
    throw error;
  }
};
