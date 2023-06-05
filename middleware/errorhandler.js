const { constants } = require("../constants");
const errorhandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log(statusCode,'yes')
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stackTrace,
      });
    case constants.UNAUTHORIZED:
      res.json({
        title: "UNAUTHORIZED",
        message: err.message,
        stackTrace: err.stackTrace,
      });
    case constants.FORBIDDEN:
      res.json({
        title: "FORBIDDEN",
        message: err.message,
        stackTrace: err.stackTrace,
      });
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stackTrace,
      });

    default:
      console.log("Error !");
      break;
  }
};
module.exports = errorhandler;
