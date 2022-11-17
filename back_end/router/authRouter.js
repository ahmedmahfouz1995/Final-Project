const { json } = require("express");
const express = require("express");
const bcrypt = require('bcrypt')
const UserModel = require("../models/user");
const { get, getById, getBy, add, editById, deleteById } = require("../utils/crud");
const { signToken } = require('../utils/token')

const router = express.Router();

router.post("/login", async (req, res, next) => {
  const auth_token = req.header('Authorization');
  // assumption!!! auth_token already verified
  if (auth_token) {
    return next()
  }

  const { email, password } = req.body
  const user = await getBy({ email }, UserModel, []);
  if (!user) {
    return next(new Error("wrong user or password"));
  }

  const { _id: id, password: userPassword, role } = user;
  const match = await bcrypt.compare(password, userPassword);
  if (!match) {
    return next(new Error("Wrong password"));
  }
  const token = signToken({ id, role });
  res.cookie('auth_token', token)
    .redirect('/')
});

router.post("/signup", async (req, res) => {
  console.log("we are here in signup")
  try {
    const { username, email, password, role } = req.body;
    const bcryptPass = await bcrypt.hash(password, 8);
    const user = await add(new UserModel({ username, email, password: bcryptPass, role }), []);
    console.log("user", user);
    res.redirect('/');
  } catch (error) {
    console.log(error);
    return next(error);
  }
});

module.exports = router;
