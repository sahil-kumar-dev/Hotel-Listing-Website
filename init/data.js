const initData = [
	{
		title: "Historic Villa in Tuscany",
		description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the heritage",
		image: "https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_1280.jpg",
		price: 2500,
		location: "Florence",
		country: "Italy"
	},
	{
		title: "Luxury Beachfront Resort",
		description: "Enjoy a relaxing getaway in this luxurious beachfront resort with stunning ocean views.",
		image: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
		price: 3500,
		location: "Maui",
		country: "USA"
	},
	{
		title: "Cozy Cabin in the Woods",
		description: "Escape to nature in this cozy cabin nestled deep in the forest. Perfect for a rustic retreat.",
		image: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg",
		price: 1200,
		location: "Aspen",
		country: "USA"
	},
	{
		title: "Secluded Mountain Chalet",
		description: "Experience solitude and breathtaking mountain vistas in this secluded chalet.",
		image: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_640.jpg",
		price: 2800,
		location: "Chamonix",
		country: "France"
	},
	{
		title: "Urban Loft in NYC",
		description: "Live in style in this modern urban loft located in the heart of New York City.",
		image: "https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_640.jpg",
		price: 4500,
		location: "New York",
		country: "USA"
	},
	{
		title: "Rustic Farmhouse in Provence",
		description: "Discover the rustic charm of Provence in this beautiful farmhouse surrounded by lavender fields.",
		image: "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_640.jpg",
		price: 2100,
		location: "Provence",
		country: "France"
	},
	{
		title: "Historic Castle in Scotland",
		description: "Step back in time and live like royalty in this historic Scottish castle.",
		image: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg",
		price: 3800,
		location: "Edinburgh",
		country: "Scotland"
	},
	{
		title: "Beachfront Bungalow in Bali",
		description: "Relax on the pristine beaches of Bali in this cozy beachfront bungalow.",
		image: "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_640.jpg",
		price: 1600,
		location: "Bali",
		country: "Indonesia"
	},
	{
		title: "Modern Penthouse in Dubai",
		description: "Experience luxury living in this modern penthouse with stunning views of Dubai's skyline.",
		image: "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_640.jpg",
		price: 5500,
		location: "Dubai",
		country: "UAE"
	},
	{
		title: "Charming Cottage in Cotswolds",
		description: "Escape to the picturesque Cotswolds in this charming cottage with a thatched roof.",
		image: "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_640.jpg",
		price: 1800,
		location: "Cotswolds",
		country: "UK"
	},
	{
		title: "Ski-in/Ski-out Chalet in Aspen",
		description: "Hit the slopes in style with this ski-in/ski-out chalet in Aspen's premier ski resort.",
		image: "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_640.jpg",
		price: 3200,
		location: "Aspen",
		country: "USA"
	},
	{
		title: "Modern Villa in Ibiza",
		description: "Party in style in this modern villa on the vibrant island of Ibiza.",
		image: "https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_640.jpg",
		price: 2800,
		location: "Ibiza",
		country: "Spain"
	},
	{
		title: "Historic Townhouse in Boston",
		description: "Explore the rich history of Boston while staying in this historic townhouse.",
		image: "https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_640.jpg",
		price: 2200,
		location: "Boston",
		country: "USA"
	},
	{
		title: "Seaside Cottage in Cornwall",
		description: "Relax by the sea in this charming seaside cottage on the coast of Cornwall.",
		image: "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_640.jpg",
		price: 1500,
		location: "Cornwall",
		country: "UK"
	},
	{
		title: "Mountain View Cabin in Colorado",
		description: "Enjoy stunning mountain views from this cozy cabin in the Colorado Rockies.",
		image: "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_640.jpg",
		price: 1800,
		location: "Breckenridge",
		country: "USA"
	},
	{
		title: "Luxury Penthouse in Paris",
		description: "Live the high life in this luxurious penthouse overlooking the Eiffel Tower.",
		image: "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_640.jpg",
		price: 5800,
		location: "Paris",
		country: "France"
	},
	{
		title: "Beachfront Condo in Miami",
		description: "Wake up to the sound of the waves in this beachfront condo in vibrant Miami Beach.",
		image: "https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337_640.jpg",
		price: 3200,
		location: "Miami",
		country: "USA"
	},
	{
		title: "Rural Farm Retreat in Vermont",
		description: "Escape to the countryside in this charming farmhouse retreat in Vermont.",
		image: "https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_640.jpg",
		price: 1400,
		location: "Vermont",
		country: "USA"
	},
	{
		title: "Historic Townhouse in London",
		description: "Immerse yourself in London's history with a stay in this elegant historic townhouse.",
		image: "https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016_640.jpg",
		price: 3200,
		location: "London",
		country: "UK"
	},
	{
		title: "Ski Chalet in the Swiss Alps",
		description: "Hit the slopes in Switzerland from this cozy ski chalet nestled in the Alps.",
		image: "https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_640.jpg",
		price: 2600,
		location: "Zermatt",
		country: "Switzerland"
	},
	{
		title: "Beachfront Villa in the Maldives",
		description: "Experience paradise in a beachfront villa on the stunning islands of the Maldives.",
		image: "https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_640.jpg",
		price: 6900,
		location: "Maldives",
		country: "Maldives"
	},
	{
		title: "Countryside Cottage in Ireland",
		description: "Discover the beauty of the Irish countryside in this charming cottage near Dublin.",
		image: "https://cdn.pixabay.com/photo/2016/08/11/23/55/trees-1587301_640.jpg",
		price: 1700,
		location: "Dublin",
		country: "Ireland"
	},
	{
		title: "Desert Oasis in Dubai",
		description: "Escape to a desert oasis in this luxurious resort in the heart of Dubai's desert.",
		image: "https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_640.jpg",
		price: 4500,
		location: "Dubai",
		country: "UAE"
	},
	{
		title: "Historic Inn in New Orleans",
		description: "Experience the rich culture of New Orleans in this historic inn in the French Quarter.",
		image: "https://cdn.pixabay.com/photo/2018/06/13/18/20/waves-3473335_640.jpg",
		price: 2900,
		location: "New Orleans",
		country: "USA"
	},
	{
		title: "Mountain View Lodge in Colorado",
		description: "Enjoy the serenity of the Rocky Mountains in this mountain view lodge in Aspen.",
		image: "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_640.jpg",
		price: 2200,
		location: "Aspen",
		country: "USA"
	},
	{
		title: "Seaside Villa in Greece",
		description: "Relax by the crystal-clear waters of the Mediterranean in this seaside villa in Santorini.",
		image: "https://cdn.pixabay.com/photo/2016/10/18/21/28/seljalandsfoss-1751463_640.jpg",
		price: 3600,
		location: "Santorini",
		country: "Greece"
	},
	{
		title: "Modern Apartment in Tokyo",
		description: "Experience the futuristic city of Tokyo from this modern apartment in Shibuya.",
		image: "https://cdn.pixabay.com/photo/2015/03/28/16/40/lake-696098_640.jpg",
		price: 3900,
		location: "Tokyo",
		country: "Japan"
	},
	{
		title: "Historic Manor in Edinburgh",
		description: "Live like royalty in this historic manor house in the heart of Edinburgh.",
		image: "https://cdn.pixabay.com/photo/2017/12/17/19/08/bridge-3024773_640.jpg",
		price: 3200,
		location: "Edinburgh",
		country: "Scotland"
	},
	{
		title: "Beachfront Cottage in Cape Cod",
		description: "Escape to the picturesque shores of Cape Cod in this cozy beachfront cottage.",
		image: "https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115_640.jpg",
		price: 2000,
		location: "Cape Cod",
		country: "USA"
	},
	{
		title: "Vineyard Retreat in Napa Valley",
		description: "Indulge in wine country living at this vineyard retreat in Napa Valley, California.",
		image: "https://cdn.pixabay.com/photo/2018/06/09/17/25/trees-3464777_640.jpg",
		price: 3500,
		location: "Napa Valley",
		country: "USA"
	},
	{
		title: "Safari Lodge in Kenya",
		description: "Embark on a safari adventure from this luxury lodge in the heart of the Kenyan wilderness.",
		image: "https://cdn.pixabay.com/photo/2018/05/17/09/18/away-3408119_640.jpg",
		price: 4800,
		location: "Maasai Mara",
		country: "Kenya"
	},
	{
		title: "Historic Townhouse in Charleston",
		description: "Experience Southern hospitality in this historic townhouse in charming Charleston.",
		image: "https://cdn.pixabay.com/photo/2015/03/22/23/07/bora-bora-685303_640.jpg",
		price: 2600,
		location: "Charleston",
		country: "USA"
	},
	{
		title: "Beachfront Villa in Bali",
		description: "Escape to paradise with a beachfront villa on the tropical island of Bali.",
		image: "https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295431_640.jpg",
		price: 3200,
		location: "Bali",
		country: "Indonesia"
	}
];

module.exports = { data: initData };
// You can continue adding more data entries as needed.
