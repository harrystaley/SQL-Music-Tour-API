// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize') // added dependency


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION OLD
// const sequelize = new Sequelize(process.env.PG_URI)

// SEQUELIZE CONNECTION
 let sequelize = new Sequelize({ 
    username: "postgres",
    password: "",
    host: "127.0.0.1",
    dialect: "postgres"})

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})