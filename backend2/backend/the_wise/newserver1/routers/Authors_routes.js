const express = require('express')
const AuthorController = require('../controllers/AuthorController')
const route = express.Router()

route.get('/GetAll', AuthorController.AllAuthors);

module.exports = route