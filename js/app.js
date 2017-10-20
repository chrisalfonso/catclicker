// Model
var initialCats = [
	{
		clickCount: 0,
		name: 'Tabby',
		nickNames: ['TabTab', 'T-Bone', 'Mr.T', 'Tabster McTabish'],
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https://flickr.com',
	},
	{
		clickCount: 0,
		name: 'Tiger',
		nickNames: ['Tigger', 'Tigs', 'Ol Tigs McDigs'],
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		imgAttribution: 'https://flickr.com',
	},
	{
		clickCount: 0,
		name: 'Scaredy',
		nickNames: ['Casper', 'Frighty Fright'],
		imgSrc: 'img/1413379559_412a540d29_z.jpg',
		imgAttribution: 'https://flickr.com' ,
	},
	{
		clickCount: 0,
		name: 'Shadow',
		nickNames: ['Darkness', 'D Payne'],
		imgSrc: 'img/4154543904_6e2428c421_z.jpg',
		imgAttribution: 'https://flickr.com',
	},
	{
		clickCount: 0,
		name: 'Gorm',
		nickNames: ['El Maxo', 'FecesFace', 'THE Gorm'],
		imgSrc: 'img/9648464288_2516b35537_z.jpg',
		imgAttribution: 'https://flickr.com',
	}
];

// Class constructor
var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.nickNames = ko.observableArray(data.nickNames);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);

	// Cat Levels
	this.catLevel = ko.computed(function() {
		switch(true) {
			case this.clickCount() <= 5:
				return "Newborn";
				break;
			case this.clickCount() <= 10:
				return "Kitty";
				break;
			case this.clickCount() <= 20:
				return "Madam/Sir Cat";
				break;
			case this.clickCount() <= 50:
				return "Most Honorable Cat";
				break;
			case this.clickCount() > 50:
				return "Lord/Lordess of the Cats";
				break;
			case this.clickCount() > 100:
				return "Immortal Cat"
		}
		
	}, this);
}

// ViewModel: connects and separates View from Model.
var ViewModel = function() {
	var self = this;

	// keep all the kitties here
	this.catList = ko.observableArray([]);

	// make a cat object for each item in the data array (up top)
	initialCats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem));
	});

	// get the currently selected cat
	this.currentCat = ko.observable(this.catList()[0]);

	// track how many times cat image has been clicked
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

	// change currentCat
	this.changeCat = function(clickedCat) {
		// what is the index of the cat was clicked?
		// pass that index to the ko.observable for this.currentCat
		// knockout js docs indicates that item that is clicked is passed in to function
		self.currentCat(clickedCat);
		//console.log('HI');
	};


	/*
		Using "with" in the view changes the binding context
		so that currentCat is the scope. Previously, 
		this.currentCat().clickCount() was needed, but using "with"
		eliminates the need for the currentCat().
	*/
}

// Required
ko.applyBindings(new ViewModel());
