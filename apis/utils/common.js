const formatResponse = (res, code, message, data = {}) => {
  res.status(code).json({
    data,
    meta: {
      message,
    },
  });
};

module.exports = { formatResponse };
