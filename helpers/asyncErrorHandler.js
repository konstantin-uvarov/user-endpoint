function asyncErrorHandler(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((error) => {
      console.error(error);
      res.status(500).json({ error: error.message });
    });
  };
}

module.exports = asyncErrorHandler;
