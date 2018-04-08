var mongoose = require('mongoose');

// tells mongoose which Promise library to use
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Model describing specific data-base position
var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

// Make instance of model - do not save to database
var newTodo = new Todo({
	text: 'Example todo'
});

var completedTodo = new Todo({
	text: 'Hug Lucy',
	completed: true,
	completedAt: 1800
});

// Save to database
/*newTodo.save().then((doc) => {
	console.log('Saved todo', doc);
}, (e) => {
	console.log('Unable to save todo');
});*/

/*newTodo.save().then((doc) => {
	console.log('Saved todo', doc);
}, (error) => {
	console.log('Unable to save todo', error);
})*/




// User model
// email = require

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
})

var newUser = new User({
	email: 'xxx@pl'
})

newUser.save().then((doc) => {
	console.log('New user added', doc);
}, (e) => {
	console.log('Unable to save user', e);
})










