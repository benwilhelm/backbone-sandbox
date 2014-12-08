Person = Backbone.Model.extend({

	defaults: {
		firstName: "Joe",
		lastName:  "Blow"
	},

	initialize: function() {
		console.log('New person initialized');
	},

	rename: function(fullName) {
		var a = fullName.split(' ');
		var fname = a[0];
		var lname = a[1] || null;
		this.set('firstName', fname);
		this.set('lastName',  lname);
	}
});