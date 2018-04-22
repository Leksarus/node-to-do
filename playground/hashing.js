const jwt = require('jsonwebtoken');

var data = {
	id: 5
};

// value that we send to user when he logged in
var token = jwt.sign(data, 'secretKey123');
console.log(token);

var decoded = jwt.verify(token,'secretKey123');
console.log('decoded', decoded);


/*const {SHA256} = require('crypto-js');

var message = 'I am message to hash';

//return Object
var hashedMessage = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hashed message: ${hashedMessage}`);

var data = {
	id: 5
};
var token = {
	data,
	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}


// Because of not knowing secret in hash, any modification in token will be detected
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
if (resultHash === token.hash) {
	console.log('Data was not changed');
} else {
	console.log('Data was changed. Do not trust that motherfucker');
}*/