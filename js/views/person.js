PersonView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},

	render: function() {
		var template = _.template( $('#tpl_person').html());
		var html = template({
			firstName: this.model.get('firstName'),
			lastName:  this.model.get('lastName')
		});
		this.$el.html( html );
	}
});