const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
const Types = Schema.Types;

const userSchema = new Schema({
  email: {
    type: Types.String,
    trim: true,
    required: true,
    text: true,
  },
  name: {
    type: Types.String,
    trim: true,
    required: true,
    text: true,
  },
  password: { type: Types.String, trim: true, required: true, text: true },
});

userSchema.post("save", function (doc, next) {
  next();
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    return null;
  }
  return null;
};

const User = mongoose.model("user", userSchema, "user");

module.exports = { User };
