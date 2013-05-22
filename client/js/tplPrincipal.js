moviesHandleAcc = Meteor.subscribe("peliculas", "Accion");
//moviesHandleCf = Meteor.subscribe("peliculas", "Ciencia Ficcion",15);

Template.tplPrincipal.pelisx_genero = function() {
	console.log('GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG');
	return Movies.find({genero:Session.get('genero')}, {limit:Session.get('limit')});
};

Template.tplPrincipal.pelis_all = function() {
	return Movies.find({}, {limit:15});

};


Template.moviesList.events({  
  'click #btnProx': function(event,tmpl) {
  	var contador = 0;

  	if(Session.get('limit')!=undefined)
  		contador=Session.get('limit')+1;

	Session.set('limit',contador);  
  },
   'click #btnBorrarSession': function(event,tmpl) {  	
	Session.set('limit',0);    
  },
   'click #btnCambiarGenero': function(event,tmpl) {  	
   		
   		console.log('generoooo:  '+tmpl.find("#txtGenero").value);

		Session.set('genero',tmpl.find("#txtGenero").value);  
  }
});
