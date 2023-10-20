const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // JSON 형식의 요청 본문 파싱
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 요청 본문 파싱
app.use(cors());

app.get('/',(req,res)=>{
    console.log('/root')
    res.send("ok")
})

app.get('/user',(req,res)=>{
    console.log('/user')
    db.query("select * from ict_team.user", (err, data) => {
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

// 로그인API
app.post('/user/sign-in', (req, res) => {
    const { email, password } = req.body;

    bcrypt.hash(password, 10, function(err, hash) {
        if(err) {
            console.error(err);
            return res.status(500).json({ message: '패스워드 해싱 중 오류가 발생했습니다.'});
        }


    db.query('INSERT INTO user (email, password) VALUES (?, ?)', [email, hash], function (err, results, fields) {
        if (err) {
            console.error(err);
            res.status(500).json({ message: '오류가 발생했습니다.' });
        } else {
            res.json(results);
            console.log(results);
            console.log(fields);
        }
        return res.send("seccess");
        });
    });
});

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