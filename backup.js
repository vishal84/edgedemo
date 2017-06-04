productRef.push({
	id: "1",
	sku: "AbC123-1",
	title: "Delightful Day",
	description: "Necessitatibus convallis etiam tempus nibh eu ac vel adipiscing mi",
	type: "Anniversary",
	price: "$29.99",
	image: "delightfulday.jpg"
});
productRef.push({
	id: "2",
	sku: "ZuE3tQ-2",
	title: "Fields of Europe",
	description: "Semper est augue sodales lacus tristique sed eget non velit",
	type: "Birthday",
	price: "$19.99",
	image: "fieldsofeurope.jpg"
});
productRef.push({
	id: "3",
	sku: "Fi25EO-3",
	title: "Floral Embrace",
	description: "Illum nullam nunc imperdiet in at in pulvinar turpis aliquam etiam id est sed sed et integer magna integer nibh",
	type: "Anniversary",
	price: "$39.99",
	image: "floralembrace.jpg"
});
productRef.push({
	id: "4",
	sku: "Hy91Se-4",
	title: "Hydrangeas",
	description: "Dictum quis ac mauris sed velit lacus donec adipiscing platea non nonummy velit sed libero velit ultricies semper nulla pellentesque",
	type: "Birthday",
	price: "$9.99",
	image: "hydrangeas.jpg"
});
productRef.push({
	id: "5",
	sku: "Oia78e-5",
	title: "Lavender Dreams",
	description: "Omnis purus pulvinar conubia cursus nulla magna quisque cum mauris nunc sit integer sapien nibh eu mollis purus ipsum ipsum",
	type: "Sympathy",
	price: "$14.99",
	image: "lavenderdreams.jpg"
});
productRef.push({
	id: "6",
	sku: "Ty37Jk-6",
	title: "Orchids",
	description: "Vivamus fusce at dapibus duis sodales velit diam iaculis non in integer suspendisse malesuada dui mattis ligula in nec pede",
	type: "Birthday",
	price: "$12.99",
	image: "orchids.jpg"
});
productRef.push({
	id: "7",
	sku: "07pPaE-7",
	title: "Sangria Bouquet",
	description: "Vivamus fusce at dapibus duis sodales velit diam iaculis non in integer suspendisse malesuada dui mattis ligula in nec pede",
	type: "Anniversary",
	price: "$27.99",
	image: "sangriabouquet.jpg"
});
productRef.push({
	id: "8",
	sku: "DFw83L-8",
	title: "Sugar N Spice",
	description: "Magnis magnis litora lacus pretium bibendum ut justo nonummy erat porttitor a placerat ac ac netus feugiat imperdiet aliquam suscipit",
	type: "Birthday",
	price: "$17.99",
	image: "sugarnspice.jpg"
});
productRef.push({
	id: "9",
	sku: "EzC0Pn-9",
	title: "Summer Dunes",
	description: "Phasellus amet dui ligula mi eget in lorem ornare malesuada et nec ullamcorper fringilla adipiscing praesent eleifend egestas adipisci velit",
	type: "Sympathy",
	price: "$11.99",
	image: "summerdunes.jpg"
});
productRef.push({
	id: "10",
	sku: "ZuL043-10",
	title: "Summer Lily",
	description: "Aenean et nullam pede nulla amet leo vestibulum nibh penatibus vulputate scelerisque nam tristique pretium reiciendis morbi in commodo nonummy",
	type: "Anniversary",
	price: "$18.99",
	image: "summerlily.jpg"
});

ordersRef.push({
	id: "1",
	customer: {
		id: "1",
		first: "John",
		last: "Doe",
		email: "John.Doe@gmail.com",
		shipping: {
			street: "55 9th Avenue",
			city: "New York",
			state: "NY",
			zip: "10005"
		}
	},
	cart: {
		id: "1",
		products: [3, 7]
	},
	payment: {
		cardNumber: "1234 5678 9012 3456",
		month: "10",
		year: "2020",
		cvv: "123"
	}
});