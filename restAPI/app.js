const express=require('express');
const app=express();
const morgan=require('morgan');
const bodyParser=require('body-parser'); 
const mongoose=require('mongoose');


//connect to mongodb
mongoose.connect('mongodb://localhost/mydb', {useNewUrlParser: true});
var connection=mongoose.connection;
connection.on('connected',function(){console.log('connected')})


//user routes
const userRoutes = require('./api/routes/users');
const productRoutes = require('./api/routes/products')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false})) 
app.use(bodyParser.json());


 app.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin", '*');
	res.header("Access-Control-Allow-Headers",'Origin, X-Requested-With,Content-Type,Authorization,Accept');
	 if(req.method=="OPTIONS"){
		res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,PATCH");
		return res.status(200).json({}); 
	} 
	next();
}) 

app.use('/product',productRoutes);
app.use('/user',userRoutes);


app.use((req,res,next)=>{
	const error=new Error('Not found');
	error.status=404;
	next(error);
});

app.use((error,req,res,next)=>{
	res.status(error.status).json({
		message : error.message
	});
});

module.exports=app;