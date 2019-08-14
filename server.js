if(process.env.NODE_ENV !=='production'){
    require('dotenv').config();
}


const expres=require('express');
const app=expres();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const methodOverride=require('method-override');
const path=require('path');

//Set bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({type:'application/vnd.api+json'})); //parse application/vnd.api+json as json
app.use(methodOverride('_method'));

//Set stactic file
app.use(morgan('dev'));
app.use(expres.static(path.join(__dirname,'/public')));

//Handler with error
app.use((err,req,res,next)=>{
    res.send({error:err.message});
});

//Connect to mongoose
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true
});
const db=mongoose.connection;
db.on('error',(err)=>{
    console.error(err);
})
db.once('open',()=>console.log('Connected to Mongoose'));

//Route 
const routeIndex=require('./routes/index');
app.use('/',routeIndex);
app.get('*',(req,res)=>{
    res.render('index.html');
});
//Connected with server
var port=process.env.PORT || 4500;
app.listen(port,()=>{
    console.log(`Yeah!!! You have connected with ${port}`)
})