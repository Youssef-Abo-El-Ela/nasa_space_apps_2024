const express = require('express');
const routerOnBoarding = express.Router()

routerOnBoarding.post('/login')

module.exports = {routerOnBoarding}