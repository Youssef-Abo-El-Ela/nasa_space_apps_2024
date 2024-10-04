const { sequelize, app, express } = require('./src/config')
const mainRouter = require('./src/routes')
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.port || 3000

const test =async ()=>{

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
test()
app.use(express.json())
app.use('/api', mainRouter)
app.listen(port, () => {
    console.log('Server listenting on port', port);
})
