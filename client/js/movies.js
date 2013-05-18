moviesHandle = Meteor.subscribe("peliculas", "100", "200", "300");


Template.moviesList.movies = function() {
  return Movies.find();
};

// Handle movieForm events
Template.movieForm.events = {
  'submit': function(e, tmpl) {
    // Don't postback
    e.preventDefault();

    //TODO:habria que crear el objeto en el servidor
    var newMovie = {
      title: tmpl.find("#title").value,
      director: tmpl.find("#director").value,
      genero: tmpl.find("#genero").value
    };

    // add the movie to the db
    //Movies.insert(newMovie);

    //BUG: aca se pudre

    Meteor.call("addMovie", newMovie, function(err, result) {
      if (err) alert('hubo un error: ' + err.reason);
    });
  }
};