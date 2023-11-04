const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const listingSchema=new Schema({
	title:{
		type:String,
		required:true
	},
	description:String,
	image:{
		type:String,
		default:"https://cdn.pixabay.com/photo/2023/09/05/16/39/sunrise-8235458_1280.jpg",
		set:(v)=>v===""?"https://cdn.pixabay.com/photo/2023/09/05/16/39/sunrise-8235458_1280.jpg":v
	},
	price:Number,
	location:String,
	country:String
})

const Listing=mongoose.model("Listing",listingSchema)

module.exports=Listing; 