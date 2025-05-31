const Razorpay = require("razorpay");
const dotenv = require("dotenv");
const Order = require("../moduls/Order.model");

dotenv.config();

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID, // Your Razorpay key id
    key_secret: process.env.RAZORPAY_KEY_SECRET // Your Razorpay key secret
});

// Create Order
module.exports.createOrder = async (req, res) => {
    const { amount, currency } = req.body; // Expecting amount and currency from the request body

    try {
    const options = {
        amount: Number(amount * 100), // Amount in paise
        currency: currency,
        receipt: `receipt_order_${Math.floor(Math.random() * 10000)}`, // Unique receipt ID
    };
        console.log("hey")
        const order = await razorpayInstance.orders.create(options);
        console.log(order)
        const orderData = new Order.create({
            amount: amount,
            currency: currency,
            productId: req.body.productId,
            status: 'pending'
        });
        await orderData.save();
        console.log(orderData)
        res.status(201).json({
            success: true,
            order:orderData
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating order',
            error: error.message
        });
    }
};