var express = require('express');
var router = express.Router();

// employee routes
const employeeRoutes = require("./employeeRoutes");
router.use("/employee", employeeRoutes);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
