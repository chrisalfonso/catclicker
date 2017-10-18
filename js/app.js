// ViewModel: connects and separates View from Model.
var ViewModel = function() {
	// Ah, the model (stuff below) is in the ViewModel. 
	// There's a better way, but not 'til later.
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

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
				return "Immortal Cat";
				break;
			case this.clickCount() > 100:
				return "Lord/Lordess of the Cats"
		}
		
	}, this);

	
}

/*if (this.clickCount() <= 5) {
			return "Newborn";
		}
		*/

// Required
ko.applyBindings(new ViewModel());
