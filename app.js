const express=require('express');
const app=express();
const mysql=require('mysql2/promise');
const connectdb=require('./config/db');
const dotenv = require('dotenv');
const eventRoutes = require("./routes/eventRoutes");

app.use(express.json());


dotenv.config();
//Database Connection
connectdb().then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log("error connecting to database",err);
});

//Route connecting
app.use("/api", eventRoutes);



//Server PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})