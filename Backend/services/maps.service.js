const axios = require("axios");

module.exports.getAddressCordinate = async (address) => {
  const API_KEY = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);

    console.log(response, "response");

    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      console.log(location, "location");
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
