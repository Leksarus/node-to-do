const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Removes all from todos
/*Todo.remove({}).then((result) => {
	console.log(result);
})*/

//Todo.findOneAndRemove()
Todo.findOneAndRemove({_id: '5ad5d46e1d9a7903a8920a28'}).then((todo) => {
	console.log(todo);
});


//Todo.findByIdAndRemove
Todo.findByIdAndRemove('5ad5d46e1d9a7903a8920a28').then((todo) => {
	console.log(todo);
})