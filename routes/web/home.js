var express = require("express");


var router = express.Router();


router.get("/", function (req, res) {
   // console.log("hello I'm on the start page");
   res.render("home/");
});

router.get("/home", function (req, res) {
   res.render("home/");
});

router.get("/set-name", function (req, res) {
   const username = req.xxx; // > Peanut Pie

   Store(username)
});

router.get("/about", function (req, res) {
   res.render("home/about");
});

router.get("/login", function (req, res) {
   res.render("home/login")
});

router.get("/firstFloor", function (req, res) {
   res.render("home/firstFloor")
});

router.get("/try", function (req, res) {
   res.render("home/try")
});

router.get("/ESGintro", function (req, res) {
   res.render("home/ESGintro")
});

router.get("/chooseIndustry", function (req, res) {
   res.render("home/chooseIndustry")
});

router.get("/enterUsername", function (req, res) {
   res.render("home/enterUsername")
});

router.get("/stockhall", function (req, res) {
   res.render("home/stockhall")
});

router.get("/success", function (req, res) {
   res.render("home/success")
});

router.get("/fail", function (req, res) {
   res.render("home/fail")
});

router.get("/certificate", function (req, res) {
   res.render("home/certificate")
});

router.get("/company", function (req, res) {
   res.render("home/company")
});

router.get("/secondFloor", function (req, res) {
   res.render("home/secondFloor")
});
router.get("/thirdFloor", function (req, res) {
   res.render("home/thirdFloor")
});
router.get("/fourthFloor", function (req, res) {
   res.render("home/fourthFloor")
});
router.get("/fifthFloor", function (req, res) {
   res.render("home/fifthFloor")
});


module.exports = router;