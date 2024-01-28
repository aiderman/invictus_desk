const express = require('express');
const app = express()
const port = 3333
app.get('/',(req,res)=> {
    res.send("update hello im here")
});

app.listen(port,()=> console.log(`update server running on port ${port}`))