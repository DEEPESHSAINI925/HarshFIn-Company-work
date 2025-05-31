const express = require("express")
const { createOrder } = require("../Controller/paymentController")
const Router = express.Router()

// Route to create a payment order
Router.post("/create/order", createOrder)
module.exports = Router