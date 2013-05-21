

/*Template.tplPrincipal.paramGeneroAccion = {
  paramGenero: 'Accion'
};
Template.tplPrincipal.paramGeneroCF = {
  paramGenero: 'Ciencia Ficcion'
};

Template.moviesList.movies = function() {
  console.log('paramGenero: ' + this.paramGenero);
  return Movies.find({genero:this.paramGenero});
};
*/

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
    Movies.insert(newMovie);
    /*Meteor.call("addMovie", newMovie, function(err, result) {
      if (err) alert('hubo un error: ' + err.reason);
    });
*/
  }
};