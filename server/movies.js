

Meteor.publish("peliculas", function (param1,param2,param3){
	console.log('param1: '+param1);
	console.log('param2: '+param2);
	console.log('param3: '+param3);

	return Movies.find({});
});

Movies.allow({
	insert: function (userId,doc,p3){

		console.log('userId: '+userId);
		console.log('doc: '+doc);
		console.log('p3: '+p3);		
		return true;
	}

});


Meteor.startup(function () {
    if (Movies.find().count() == 0) {    	
        Movies.insert({ title: "Star Wars", director: "Lucas" });
        Movies.insert({ title: "Memento", director: "Nolan" });
        Movies.insert({ title: "King Kong", director: "Jackson" });
    }
});