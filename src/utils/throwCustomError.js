const throwCustomError = (message, statusCode) => {
    const error = new Error(message);

    error.code = statusCode;

    throw error;
};

module.exports = throwCustomError;