const handleDbErrorResponse = (error) => {
  const extractedErrors = [];

  error.errors.map((err) =>
    extractedErrors.push({
      [err.path]: err.message,
    })
  );
  return extractedErrors;
};

module.exports = handleDbErrorResponse;
