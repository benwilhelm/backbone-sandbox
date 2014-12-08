(function($){

	$(document).ready(function(){
	
		var person = new Person();

		var personView = new PersonView({
			model: person,
			el: $("#profile")
		})
	
	});
	
})(jQuery);
