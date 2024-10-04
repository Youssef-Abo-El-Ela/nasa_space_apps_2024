const { Sequelize } = require('sequelize');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const app = express()

const connectionString = process.env.DATABASE_URL

const sequelize = new Sequelize(connectionString,{
    dialect:'postgres'
})

module.exports= {sequelize , express, app}