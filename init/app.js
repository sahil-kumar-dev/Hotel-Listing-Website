const mongoose = require('mongoose')
const Listing = require('../models/listing')
const initData = require('./data')

main().then(() => {
	console.log("Connected to database.");
}).catch((err) => {
	console.log("Some error occured " + err);
})


async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/hotel');
}

async function initDatabase(){
	await Listing.deleteMany({});
	await Listing.insertMany(initData.data);
	console.log("Data Added");
}

initDatabase()