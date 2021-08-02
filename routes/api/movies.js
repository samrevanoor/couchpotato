const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/movies')

router.get('/faves', moviesCtrl.favesIndex);
router.get('/watchlist', moviesCtrl.watchlistIndex);
router.post('/faves', moviesCtrl.createFave);
router.post('/watchlist', moviesCtrl.createWatchlist);
router.delete('/faves/:id', moviesCtrl.favesDelete);
router.delete('/watchlist/:id', moviesCtrl.watchlistDelete);

module.exports = router;
