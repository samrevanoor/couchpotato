const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/movies')

router.get('/faves', moviesCtrl.index);
router.post('/faves', moviesCtrl.create);

module.exports = router;
