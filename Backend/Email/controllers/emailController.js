const passport = require("passport");
const User = require("../models/authModel");

const CLIENT_URL = "http://localhost:3000/";
const ADMIN_URL = "http://localhost:3000/admin";

let isAdmin = false;

const loginSuccess = (req, res) => {
  if (req.user) {
    const { _id, googleId, ...userWithoutIds } = req.user.toObject();
    res.status(200).json({
      success: true,
      message: "successful",
      user: userWithoutIds,
    });
  }
};
const loginFailed = (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
  res.redirect(CLIENT_URL);
};

const logout = (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
};

const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

const googleAdminAuth = (req, res, next) => {
  isAdmin = true;
  passport.authenticate("google", { scope: ["profile", "email"] })(
    req,
    res,
    next
  );
};

const googleCallback = async (req, res) => {
  try {
    let user = await User.findOne({ googleId: req.user.googleId });

    if (user && isAdmin) {
      await User.updateOne(
        { googleId: req.user.googleId },
        { $set: { isUser: false } }
      );
    }
    let user1 = await User.findOne({ googleId: req.user.googleId });

    if (user1.isAdmin) {
      return res.redirect(ADMIN_URL);
    } else {
      return res.redirect(CLIENT_URL);
    }
  } catch (err) {
    console.error(err);
    return res.redirect("/login/failed");
  }
};

module.exports = {
  loginSuccess,
  loginFailed,
  logout,
  googleAuth,
  googleAdminAuth,
  googleCallback,
};
