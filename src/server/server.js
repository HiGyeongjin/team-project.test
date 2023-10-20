const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js')

app.get('/',(req,res)=>{
    console.log('/root')
})

app.get('/user',(req,res)=>{
    console.log('/user')
    db.query("select * from ict_team.auth", (err, data) => {
        if(!err){
            res.send(data)
            //response, send
            //응답을 클라이언트 쪽으로 보낸다.
        }
        else{
            console.log(err)
        }
    })
})
/*
app.get('/movie/:id',(req,res)=>{
    console.log('/movie/:id')
    const id = req.params.id
    console.log(id)//3
    //db.query
})
*/
app.listen(PORT, ()=>{
    console.log(`Server On : http://127.0.0.1:${PORT}`)
})