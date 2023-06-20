const express = require('express');
const app = express();
app.use((req,res,next)=>{
    res.status(200).json({
        message:"running on 8080"
    })
})
module.exports=app;