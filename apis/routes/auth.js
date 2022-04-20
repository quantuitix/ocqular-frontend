const { userLogin, userSignup } = require("../controller/auth");
const { Router } = require("express");
const { API } = require("../constants/apiConstants");
const authRoutes = Router();

authRoutes.post(API.Login, (req, res) => {
  userLogin(req, res);
});
authRoutes.post(API.Signup, (req, res) => {
  userSignup(req, res);
});

module.exports = { authRoutes };
