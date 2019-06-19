const express=require('express');
const router=express.Router();
const User=require('../models/user');




router.post('/',(req,res,next)=>{
	const user=new User({
		firstName:req.body.firstName,
		lastName:req.body.lastName,
		contact:req.body.contact,
		email:req.body.email
	});
	
router.get('/',(req,res,next)=>{
	User.find()
	.then(docs=>{
		res.status(200).json(docs);
	})
	
})
	
	user.save().then(res=>console.log(res)).catch(err=>console.log(err))
	res.status(200).json({
		message : "user details received",
		user : user
	})
});

module.exports = router;