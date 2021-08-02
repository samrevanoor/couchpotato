const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/movies')

router.get('/faves', moviesCtrl.favesIndex);
router.get('/watchlist', moviesCtrl.watchlistIndex);
router.post('/faves', moviesCtrl.createFave);
router.post('/watchlist', moviesCtrl.createWatchlist);
router.get('/faves/:id', moviesCtrl.showMovie);

module.exports = router;
