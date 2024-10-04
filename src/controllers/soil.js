const axios = require('axios');

const findSoilProp = async (req , res , next)=>{
    const response = await axios.get('http://api.weatherbit.io/v2.0/forecast/agweather?lat=30.027732&lon=31.257143&key=a1dcc63aa48540f1b9a1eca42f177403')
    // console.log(response.data)
    const requiredData = {soilMoisture: response.data.data[0].v_soilm_0_10cm,
                          specificHumidity: response.data.data[0].specific_humidity,
                          soilTemperature: response.data.data[0].soilt_0_10cm}
    console.log(requiredData);
}

module.exports = {findSoilProp}