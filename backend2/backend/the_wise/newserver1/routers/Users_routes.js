const express = require('express')
const UserController = require('../controllers/UserControllers')
const route = express.Router()


route.post('/register', UserController.register);
route.post('/login', UserController.loginUser);


module.exports = route