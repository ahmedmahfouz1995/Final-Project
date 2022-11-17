
const jwt = require('jsonwebtoken');
const key = 'secretkey';

const verifyToken = (token) => jwt.verify(token, key);
const signToken = (token) => jwt.sign(token, key);

module.exports = {verifyToken, signToken};