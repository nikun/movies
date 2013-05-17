Meteor.methods({
    addMovie: function (newMovie) {
        // Perform form validation
        if (newMovie.title == "") {
            throw new Meteor.Error(413, "Missing title!");
        }
        if (newMovie.director == "") {
            throw new Meteor.Error(413, "Missing director!");
        }
 
        // Insert movie (simulate on client, do it on server)
        console.log("**antes de hacer el insert");
        var pelis = Movies.insert(newMovie,"a","b","c");
        console.log("**Desp de hacer el insert");

        return pelis;
    }
 
});
