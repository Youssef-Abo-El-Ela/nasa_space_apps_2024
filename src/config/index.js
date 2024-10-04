const {Client} = require('pg');
const express = require('express');
const app = express()

const connectionString = process.env.DATABASE_URL

const client = new Client(
    connectionString
)

module.exports= {client , express, app}