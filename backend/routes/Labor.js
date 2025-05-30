const express = require('express');
const router = express.Router();

const {addlabour, getsites , getAllLabour} = require("../controllers/labourcontroller");

router.post("/", addlabour);
router.get("/", getsites);
router.get("/", getAllLabour);


module.exports = router;