const axios = require('axios');

const findSoilProp = async (req , res , next)=>{
    const response = await axios.get('http://api.weatherbit.io/v2.0/forecast/agweather?lat=30.027732&lon=31.257143&key=a1dcc63aa48540f1b9a1eca42f177403')
    const requiredData = response.data.data[0]
}

module.exports = {findSoilProp}