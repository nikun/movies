

Meteor.publish("peliculas", function (param1,param2,param3){
	console.log('param1: '+param1);
	console.log('param2: '+param2);
	console.log('param3: '+param3);

	return Movies.find({});
});


Movies.allow({
	insert: function (userId,doc){

		console.log("********ALLOW insert***");
		console.log('userId: '+userId);
		console.log('doc: '+doc.title);
		
		return true;
	},

	remove: function (userId,doc){
		console.log("********ALLOW remove***");
		console.log('userId: '+userId);
		console.log('doc: '+doc);
		return true;
	}

});


// Keep track of how many administrators are online.
var count = 0;
var query = Movies.find({});
var handle = query.observeChanges({
  added: function (id, campos) {
    count++;
    console.log('---added---. ' + campos.title + " brings the total to " + count + " movies");
  },
  removed: function (id) {
    count--;
    console.log('---removed---. ' + "Lost one. We're now down to " + count + " movies.");
  }
});


Meteor.startup(function () {
    if (Movies.find().count() == 0) {    	
        Movies.insert({ title: "Star Wars", director: "Lucas" });
        Movies.insert({ title: "Memento", director: "Nolan" });
        Movies.insert({ title: "King Kong", director: "Jackson" });
    }
});