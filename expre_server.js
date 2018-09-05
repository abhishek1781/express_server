const express = require('express');
let app = express();
const port = process.env.PORT || 8080;
app.get('/',(req,res)=>{
    res.send('<h1>HELLO</h1>');
});
app.get('/api',(req,res)=>{
    res.send('<h1>api page</h1>');
});
app.listen(port);
console.log('its workking');
