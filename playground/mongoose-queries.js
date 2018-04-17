const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

var id = '5ace6c9c9b722cc420c4d470';
var userId = '5aca033d65e68ecc0b4805a7';

if (!ObjectID.isValid(id)) {
	console.log('ID not valid');
}

//Mongoose handles id as object
/*Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo', todo);
});*/

Todo.findById(id).then((todo) => {
	if (!todo) {
		return console.log('Id not found');
	}

	console.log('Todo by id', todo);
}).catch((e) => console.log(e));

User.findById(userId).then((user) => {
	if (!user) {
		return console.log('User not found');
	}

	console.log('User by id', user);
}).catch((e) => console.log(e));