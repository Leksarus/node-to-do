const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const validUserId = new ObjectID();
const invalidUserId = new ObjectID();
const users = [{
	_id: validUserId,
	email: 'validUser@example.com',
	password: 'admin1',
	tokens: [{
		access: 'auth',
		token: jwt.sign({_id: validUserId, access: 'auth'}, 'topFuckingSecretSecretKey').toString()
	}]
}, {
	_id: invalidUserId,
	email: 'invalidUser@example.com',
	password: 'admin2',
	tokens: [{
		access: 'auth',
		token: jwt.sign({_id: invalidUserId, access: 'auth'}, 'topFuckingSecretSecretKey').toString()
	}]
}]

const todos = [{
	_id: new ObjectID(),
	text: 'First test todo',
	_creator: validUserId
}, {
	_id: new ObjectID(),
	text: 'Second test todo',
	completed: true,
	completedAt: 666,
	_creator: invalidUserId
}];

const populateTodos = (done) => {
	Todo.remove({}).then(() => {
		Todo.insertMany(todos);
	}).then(() => done());
};

const populateUsers = (done) => {
	User.remove({}).then(() => {
		var userOne = new User(users[0]).save();
		var userTwo = new User(users[1]).save();

		return Promise.all([userOne, userTwo]);
	}).then(() => done());
}

module.exports = {todos, populateTodos, users, populateUsers};