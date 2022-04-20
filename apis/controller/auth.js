const { formatResponse } = require("../utils/common");
const { User } = require("../models/User");
const { MESSAGES } = require("../constants/messages");

async function userLogin(req, res) {
  try {
    const { email, password } = req?.body;
    if (!email || !password) {
      return formatResponse(res, 501, MESSAGES.REQUIRED_DATA);
    }

    const user = await User.login(email, password);

    return formatResponse(res, 200, MESSAGES.SUCCESS, user);
  } catch (err) {
    console.log(err);
    return formatResponse(res, 200, MESSAGES.SERVER_ERROR);
  }
}

async function userSignup(req, res) {
  try {
    const { email, name, password } = req?.body;
    if (!email || !name || !password) {
      return formatResponse(res, 501, MESSAGES.REQUIRED_DATA);
    }

    const user = await User.create({
      email,
      name,
      password,
    });

    return formatResponse(res, 200, MESSAGES.SUCCESS, user);
  } catch (err) {
    console.log(err);
    return formatResponse(res, 200, MESSAGES.SERVER_ERROR);
  }
}

module.exports = { userLogin, userSignup };
