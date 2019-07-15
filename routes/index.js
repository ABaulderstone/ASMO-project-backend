const express = require("express");
const router = express.Router();
const AuthRoutes = require("./auth_routes");
const CustomerRoutes = require("./customer_routes");
const StaffRoutes = require("./staff_routes");
const ReviewRoutes = require("./review_routes");
const passport = require("passport");
const MailerService = require("./../services/mail_service");

router.get("/", (req, res) => res.send("Welcome to ASMO"));
router.use("/auth", AuthRoutes);
router.use("/customers", passport.authenticate("jwt", { session: false }), CustomerRoutes);
router.use("/staff", passport.authenticate("jwt", {session: false}), StaffRoutes);
router.use("/reviews", passport.authenticate("jwt", {session: false}), ReviewRoutes);




module.exports = router;

