// ViewModel: connects and separates View from Model.
var ViewModel = function() {
	// Ah, the model (stuff below) is in the ViewModel. 
	// There's a better way, but not 'til later.
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	//this.catLevel = ko.observable('Newborn')
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com');

	// Probably need to look up this method.
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
		if (clickCount < 5) {
			this.catLevel = ko.observable('Newborn')
		}
	};

	/* Cat Levels
	this.catLevel = ko.computed(function() {
		return "Kittens: " + this.incrementCounter();
	}, this);
	*/

}

// Required
ko.applyBindings(new ViewModel());
