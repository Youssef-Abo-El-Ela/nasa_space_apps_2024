const { express } = require('../config')
const { routerOnBoarding } = require('./onBoarding');
const { routerSoil } = require('./soil');
const mainRouter = express.Router()


mainRouter.use('/onBoarding', routerOnBoarding)
mainRouter.use('/soil', routerSoil)
module.exports = mainRouter


