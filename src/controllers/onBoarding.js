const { farmer } = require('../models/farmerModel')
const register = async (req, res, next) => {
    try {
        const { firstName, lastName, password, phoneNumber, country } = req.body
        const newFarmer = await farmer.create({ first_name: firstName, last_name: lastName, farmer_password:password, phone_number: phoneNumber, country })
        res.status(200).json("message: User Created Successfully")
    }
    catch(err){
        console.error(err)
    }
}


module.exports = {register}