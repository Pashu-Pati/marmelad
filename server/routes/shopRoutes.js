const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');
router.get('/', shopController.getAllShops);
module.exports = router;
