/*Meteor.publish("peliculas", function(genero,limit) {
	console.log('genero: ' + genero);
	console.log('limit: ' + limit);
	return Movies.find({genero: genero} , {limit:limit});
});*/

Meteor.publish("peliculas", function(genero, limit) {
	return Movies.find({});
});


Movies.allow({
	insert: function(userId, doc) {

		console.log("********ALLOW insert***");
		console.log('userId: ' + userId);
		console.log('doc: ' + doc.title);

		return true;
	},

	remove: function(userId, doc) {
		console.log("********ALLOW remove***");
		console.log('userId: ' + userId);
		console.log('doc: ' + doc);
		return true;
	}

});


// Keep track of how many administrators are online.
var count = 0;
var query = Movies.find({});
var handle = query.observeChanges({
	added: function(id, campos) {
		count++;
		console.log('---added---. ' + campos.title + " brings the total to " + count + " movies");
	},
	removed: function(id) {
		count--;
		console.log('---removed---. ' + "Lost one. We're now down to " + count + " movies.");
	}
});


Meteor.startup(function() {
	console.log('-------AMBIENTE-------: ' + Meteor.settings.ambiente);
	if (Meteor.settings.ambiente === "devel" && Meteor.settings.resetDB === true) {

		Movies.remove({});

		/*Movies.insert({
			title: "Star Wars",
			director: "Lucas",
			genero: "Ciencia Ficcion"
		});
		Movies.insert({
			title: "Viaje a la luna",
			director: "Nolan",
			genero: "Ciencia Ficcion"
		});
		Movies.insert({
			title: "King Kong",
			director: "Jackson",
			genero: "Ciencia Ficcion"
		});
		Movies.insert({
			title: "Duro de matar",
			director: "spilberg",
			genero: "Accion"
		});
		Movies.insert({
			title: "La Roca",
			director: "josee",
			genero: "Accion"
		});*/

		for (i = 0; i <= 100; i++) {
			Movies.insert({
				title: "La Roca " + i.toString(),
				director: "josee",
				genero: "Accion"
			});
		}

		for (i = 0; i <= 100; i++) {
			Movies.insert({
				title: "ET " + i.toString(),
				director: "josee",
				genero: "Ciencia Ficcion"
			});
		}



	}
});