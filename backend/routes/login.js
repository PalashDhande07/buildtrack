const express = require('express');
const router = express.Router();
const Modal = require('../modal/modal');
const {logincontroller} = require("../controllers/loginController")


router.post('/', logincontroller);
    



module.exports = router;