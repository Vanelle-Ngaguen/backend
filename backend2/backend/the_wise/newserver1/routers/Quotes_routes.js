const express = require('express')
const QuoteController = require('../controllers/QuoteControllers')
const route = express.Router()

//route.get('/ByCollection', QuoteController.collection);
route.get('/quotes', QuoteController.Getquotes);
route.get('/romantic', QuoteController.romantic);
route.get('/motivation', QuoteController.motivation);
route.get('/inspiration', QuoteController.inspiration);
route.get('/daily',QuoteController.daily);

module.exports = route