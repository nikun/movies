Meteor.methods({
	addMovie: function(newMovie) {
		// Perform form validation
		if (newMovie.title == '5') {
			throw new Meteor.Error(413, "Missing title!");
		}
		if (newMovie.director === "") {
			throw new Meteor.Error(413, "Missing director!");
		}
		
	}

});