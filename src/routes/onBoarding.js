const express = require('express');
const {register} = require('../controllers/onBoarding')
const routerOnBoarding = express.Router()

routerOnBoarding.post('/login')
routerOnBoarding.post('/register', register)

module.exports = {routerOnBoarding}