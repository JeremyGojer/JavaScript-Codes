var express = require('express');
var fs = require('fs');
var path = require('path');
const bodyParser = require('body-parser');
var app = express()
var _dir = "C://Users//IET//Desktop//javascript//"

app.use(express.static('public'))
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    
	res.sendFile(_dir+'login.html')
})
app.post('/login',(req,res)=>{
	
	if(req.body.username==="Jeremy" && req.body.password==="Jeremy"){
		res.redirect('./home')
	}
	else{
		res.redirect('/')
	}
})
app.get('/home',(req,res)=>{
	res.sendFile(_dir+'hello.html')
})
app.get('/form',(req,res)=>{
	res.sendFile(_dir+'form.htm')
})
app.post('/formend',(req,res)=>{
	console.log(JSON.stringify(req.body));
	res.redirect('./form');
})
app.get('/game',(req,res)=>{
	res.sendFile(_dir+'bouncingball.html');
})
app.get('/number',(req,res)=>{
	res.sendFile(_dir+'numops.html');
})
// Prime numbers program
app.get('/prime',(req,res)=>{
	res.sendFile(_dir+'prime.html');
})
app.post('/prime',(req,res)=>{
	res.send(primes(req.body.num));
})
// Calculator Program
app.get('/calculator',(req,res)=>{
	res.sendFile(_dir+'calculator.html');
})
app.post('/calculator',(req,res)=>{
	res.send(calculator(parseInt(req.body.num1),parseInt(req.body.num2),req.body.op));
})
//Currency converter program
app.get('/currency',(req,res)=>{
    res.sendFile(_dir+'currency.html');
})
app.get('/arrays',(req,res)=>{
    res.sendFile(_dir+'array.html');
})
function primes(num){
    var ret="";
    var flag;
    for(let i=1;i<num;i++){
        for(let j=2;j*j<=i;j++){
        flag=false;
            if(i%j==0){
                flag=true
                break;
            }
        }
        if(!flag){
            ret+= i+' '
        }
    }
	return `<link rel="stylesheet" href="css/output.css" type="text/css">
            <div class='output'>${ret}</div>`
}
function calculator(num1,num2,op){
    let res = 0;
	switch(op){
        case '+': res =  (num1+num2)+' '
                    break;
        case '-': res = (num1-num2)+' '
                    break;
        case '*': res =  (num1*num2)+' '
                    break;
        case '/': res =  (num1/num2)+' '
                    break;
        case '%': res =  (num1%num2)+' '
                    break;
        default : return ('Enter valid operand')
    }
    return `<link rel="stylesheet" href="css/output.css" type="text/css">
            <div class='output'>${res}</div>`
}
app.listen(9000,()=>{"Listening at port 9000"})