const express = require('express');
const app =express();

app.get('/',(req,res)=>{
    res.send("yo ho");
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("move to"+ port);
})