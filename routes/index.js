const express = require("express");
const router = express.Router();
const AuthRoutes = require("./auth_routes");
const CustomerRoutes = require("./customer_routes");
const StaffRoutes = require("./staff_routes");
const passport = require("passport");

router.get("/", (req, res) => res.send("Welcome to ASMO"));
router.use("/auth", AuthRoutes);
router.use("/customers", passport.authenticate("jwt", { session: false }), CustomerRoutes);
router.use("/staff", passport.authenticate("jwt", {session: false}), StaffRoutes);



module.exports = router;

