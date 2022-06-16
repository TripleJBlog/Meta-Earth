const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  uid: {
    type: String,
    trim: true,
    unique: 1,
    maxlength: 50,
  },
  powerplant: {
    type: Number,
  },
  house: {
    type: Number,
  },
  factory: {
    type: Number,
  },
  store: {
    type: Number,
  },
});

userSchema.statics.findByToken = function (token, cb) {
  var user = this;
  // decode token
  jwt.verify(token, "secretToken", function (err, decoded) {
    // find user by user_id
    // compare tokens from client and DB
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};
const Building = mongoose.model("Building", userSchema);
module.exports = { Building };
