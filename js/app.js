// Model
var initialCats [
	{
		clickCount: 0,
		name: 'Tabby',
		nickNames: ,
		imgSrc: ,
		imgAttribution ,
	}
]

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
	this.currentCat = ko.observable(new Cat({
		clickCount: 0,
		name: 'Tabby'
		nickNames = ko.observableArray(["TabTab", "T-Bone", "Mr.T", "Tabster McTabish"]);
		imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
		imgAttribution = ko.observable('https://www.flickr.com'); 
	}) );

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
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
