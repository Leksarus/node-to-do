
// Enviroment variable set by heroku on 'production', on test env it is set in package json, on dev default value is taken
var env = process.env.NODE_ENV || 'development';
console.log('^^ env ^^', env);

if (env === 'development') {
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}