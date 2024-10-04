const { farmer } = require('../models/farmerModel')
const register = async (req, res, next) => {
    try {
        const { firstName, lastName, password, phoneNumber, country } = req.body
        const newFarmer = await farmer.create({ first_name: firstName, last_name: lastName, farmer_password: password, phone_number: phoneNumber, country })
        res.status(200).json("message: User Created Successfully")
    }
    catch (err) {
        console.error(err)
    }
}

const login = async (request, response) => {
    try {

        const { phoneNumber, farmerPassword } = request.body;

        const foundFarmer = await farmer.findOne({
            where: { 'phone_number': phoneNumber, 'farmer_password': farmerPassword },
        });

        if (!foundFarmer) {
            return response.status(401).send('Incorrect credentials.');
        }
        return response.status(200).send(foundFarmer);
    }
    catch (error) {
        return response.status(404).send(error);
    }
}


module.exports = { register, login }