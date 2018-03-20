const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	/*db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID("5aae621b1d9a7914c4745b21")

	}, {
		$set: {
			completed: true,
			text: 'TRololo adididi'
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});*/

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID("5aae422463ace607f8b572cc")
	}, {
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: true
	}).then((result) => {
		console.log(result)
	});
});