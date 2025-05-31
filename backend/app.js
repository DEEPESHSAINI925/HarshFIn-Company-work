const dotenv=require("dotenv")
dotenv.config()
const express = require('express');
const cors = require('cors');
const userRoute=require("./routes/userRoutes")
const cookieParser = require("cookie-parser");
const postRouter=require("./routes/PostRoute")
const paymentRouter = require("./routes/paymentGateway");

const app = express();
const db=require("./DB/db")
db();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json())
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}));
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());


// Basic route
app.use("/user",userRoute)
app.use("/post",postRouter)
app.use("/payment", paymentRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
