const {Client} = require('pg');
const dotenv = require('dotenv');
const express = require('express');


dotenv.config()

const connectionString = process.env.DATABASE_URL
const port = process.env.port || 3000

const client = new Client(
    connectionString
)
async function connectToDB() {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL database');
    } catch (error) {
        console.error('Database connection error:', error.stack);
    }
}

connectToDB();
const app = express()

app.listen(port, () => {
    console.log('Server listenting on port', port);
})
