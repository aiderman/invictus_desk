const express = require('express');
const app = express()
const port = 3333
const router = require('./routes/index')
 app.use(express.json())
app.use(router)


// app.get('/',(req,res)=> {
//     res.json({mesage:"ini json value"})
//     res.send("update hello im here")
// });

// app.get('/about',(req,res)=> {
//     res.send('<h2>ini adalah about</h2>')
// });
// app.get('/user/:id',(req,res)=> {
//     const {id} = req.params
//     res.send(`im here user ${id}`)
// });

app.listen(port,()=> console.log(`update server running on port ${port}`))