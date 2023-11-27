const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config();

const DB=process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("Connection Succesfull");
}).catch((err)=>{
    console.log("Error" + err);
})
