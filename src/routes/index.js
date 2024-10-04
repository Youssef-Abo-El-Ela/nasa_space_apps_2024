const {express}  = require('../config')
const {routerOnBoarding} = require('./onBoarding');
const mainRouter = express.Router()


mainRouter.use('/onBoarding' , routerOnBoarding)

module.exports = mainRouter


