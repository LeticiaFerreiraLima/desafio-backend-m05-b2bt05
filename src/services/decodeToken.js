const jwt = require("jsonwebtoken");

const decodeToken = (authorization) => {
  const token = authorization.split(" ")[1];

  const decodedUser = jwt.decode(token);

  return decodedUser.id;
};

module.exports = decodeToken;