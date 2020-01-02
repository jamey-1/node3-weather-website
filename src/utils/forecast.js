const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/58cf0410dba43d285f6cabbaaf2424c7/" +
    latitude +
    "," +
    longitude +
    "?units=si";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " The highest temperature is " +
          body.daily.data[0].temperatureHigh +
          ", and the lowest temperature is " +
          body.daily.data[0].temperatureLow +
          ". It is currently " +
          body.currently.temperature +
          " degrees out. There is a " +
          body.currently.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
