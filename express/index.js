const express=require('express');
const requestlogger=require('./requestlogger');
const bodyParser = require('body-parser');
const app=express();
const router=require('./routing');
app.use(requestlogger)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname));

app.use('/',router);
app.listen(3000);
console.log('server is runningin 3000');
