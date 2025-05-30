const express = require('express');
const router = express.Router();
const {inventoryPost, GetData} = require("../controllers/inventory")

router.post("/", inventoryPost)
router.get("/", GetData)

module.exports = router;