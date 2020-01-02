const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?limit=1&access_token=pk.eyJ1IjoiamFtZXk4MzgzIiwiYSI6ImNrNHAxNGp5ajNqbDQza213Z2IwdHVjNHYifQ.vfqhg4OgB5pJV_Jll1wW7g";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connet to location services!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latidude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
