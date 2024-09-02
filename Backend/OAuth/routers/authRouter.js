const express = require("express");
const passport = require("passport");
const {
  loginSuccess,
  loginFailed,
  logout,
  googleAuth,
  googleAdminAuth,
  googleCallback,
} = require("../controllers/authController");
const router = express.Router();

// Route to handle successful login
router.get("/login/success", loginSuccess);

// Route to handle failed login
router.get("/login/failed", loginFailed);

// Route to handle logout
router.get("/logout", logout);

// Route to initiate Google authentication
router.get("/google", googleAuth);

// Route to initiate Google authentication for admin
router.get("/google/admin", googleAdminAuth);

// Callback route for Google to redirect to
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login/failed" }),
  googleCallback
);

module.exports = router;
