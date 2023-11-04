const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Listing = require('./models/listing')
const path = require('path')
const methodOverride = require('method-override')
const ejsMate=require('ejs-mate')


app.set("view engine", "ejs")

app.set("views", path.join(__dirname, "views"))

app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.engine("ejs",ejsMate)

app.use(express.static(path.join(__dirname,"/public")))

const PORT = 8080

main().then(() => {
	console.log("Connected to database.");
}).catch((err) => {
	console.log("Some error occured " + err);
})


async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/hotel');
}

app.listen(PORT, (req, res) => {
	console.log("Server started on PORT " + PORT);
})

app.get('/', (req, res) => {
	res.send("Server started.")
})

app.get('/listings', async (req, res) => {
	const allListings = await Listing.find({});
	res.render('index.ejs', { allListings })
})

//Show route
app.get('/listings/new', (req, res) => {
	res.render('new.ejs')
})

app.get('/listings/:id', async (req, res) => {
	let { id } = req.params;
	const listing = await Listing.findById(id);
	res.render('show.ejs', { listing })
})

app.post('/listings', async (req, res) => {
	const newListing = new Listing(req.body.listing)
	newListing.save();
	res.redirect('/listings')
})

app.get('/listings/:id/edit', async (req, res) => {
	let { id } = req.params;
	let filteredList = await Listing.findById(id);
	res.render('edit.ejs', { filteredList })
})

app.put('/listings/:id', async (req, res) => {
	let { id } = req.params;
	await Listing.findByIdAndUpdate(id, { ...req.body.listing })
	res.redirect(`/listings/${id}`)
})

app.delete('/listings/:id', async (req, res) => {
	let { id } = req.params;
	await Listing.findByIdAndDelete(id);
	res.redirect('/listings')
})