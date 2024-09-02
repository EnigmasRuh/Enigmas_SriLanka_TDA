const passport = require("passport");
const User = require("../models/authModel");

const CLIENT_URL = "http://localhost:3000/";
const ADMIN_URL = "http://localhost:3000/admin";

let isAdmin = false;

// Handle successful login
const loginSuccess = (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
    });
  }
};

// Handle failed login
const loginFailed = (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
  res.redirect(CLIENT_URL);
};

// Handle logout
const logout = (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
};

// Initiate Google authentication
const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

// Initiate Google authentication for admin
const googleAdminAuth = (req, res, next) => {
  isAdmin = true;
  passport.authenticate("google", { scope: ["profile", "email"] })(
    req,
    res,
    next
  );
};

// Handle Google authentication callback
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
