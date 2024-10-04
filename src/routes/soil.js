const {findSoilProp} = require('../controllers/soil')
const {express} = require('../config')
const routerSoil = express.Router()

routerSoil.get('/soilData', findSoilProp)

module.exports = {routerSoil}

