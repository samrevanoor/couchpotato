const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/movies')

router.post('/faves', moviesCtrl.create);

module.exports = router;
