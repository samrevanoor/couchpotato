const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/movies')

router.get('/faves/:id/filter', moviesCtrl.favesFilter);
router.get('/faves/:id', moviesCtrl.favesIndex);
router.get('/watchlist/:id/filter', moviesCtrl.watchlistFilter);
router.get('/watchlist/:id', moviesCtrl.watchlistIndex);
router.post('/faves', moviesCtrl.createFave);
router.post('/watchlist', moviesCtrl.createWatchlist);
router.delete('/faves/:id', moviesCtrl.favesDelete);
router.delete('/watchlist/:id', moviesCtrl.watchlistDelete);
router.put('/watchlist/:id', moviesCtrl.watchlistUpdate);

module.exports = router;
