const express=require('express');
const router=express.Router();
const Product=require('../models/product')

router.get('/',(req,res,next)=>{
	res.status(200).json({
		message : "get req to /products"
	})
});

router.post('/',(req,res,next)=>{
	const product=new Product({
		name:req.body.name,
		price:req.body.price
	});
	
	product.save().then(res=>console.log(res)).catch(err=>console.log(err))
	res.status(200).json({
		message : "product details received",
		product : product
	})
});

module.exports = router;