const express=require('express');
const router=express.Router();
const fs=require('fs');
const usersData=fs.readFileSync('./users.json','utf-8');
const users=JSON.parse(usersData).users;
router.get('/',(req,res,next)=>{
    res.send('hi');
})
router.post('/login',(req,res,next)=>{
    const{username,password}=req.body;
    // console.log(req.body.username);
    // console.log(req.body.password);
    const user=users.find(user=>user.username===username && user.password===password);
    if(user){
        res.send('login successful');
    }
    else{
        res.status(401).send('invalid cridential')
    }
})
module.exports=router
