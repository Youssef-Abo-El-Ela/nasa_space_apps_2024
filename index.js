const { sequelize, app, express } = require('./src/config')
const mainRouter = require('./src/routes')
const dotenv = require('dotenv');
const cors = require('cors');
const corsObj = {
    origin:'*',
    credentials: true,
    optionSuccessStatus: 200
}
dotenv.config()
const port = process.env.port || 3000
app.use(cors(corsObj));

const test = async () => {

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
app.get('/', (req, res) => res.json({ message: "yarab" }))
app.listen(port, () => {
    console.log('Server listenting on port', port);
})
