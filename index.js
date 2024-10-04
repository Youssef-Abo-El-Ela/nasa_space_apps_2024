const {express ,app}  = require('./src/config')
const mainRouter = require('./src/routes')
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.port || 3000



app.use('/api',mainRouter)
app.listen(port, () => {
    console.log('Server listenting on port', port);
})
