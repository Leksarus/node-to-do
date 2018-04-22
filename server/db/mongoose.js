var mongoose = require('mongoose');

// tells mongoose which Promise library to use
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};