var express=require('express');
var app=express();
  
app.use(express.static('public'))
const jsonParser = express.json();
app.use(jsonParser);
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{res.sendFile('Welcome.html', { root: 'public' })});

app.listen(8080);
console.log("App is at port 8080");