### Starting the server

folder: C:/Program FIles/MongoDB/Server/3.2/bin
mongod --dbpath /Users/Kamil/mongo-data --storageEngine=mmapv1

### Connect to server

folder: C:/Program FIles/MongoDB/Server/3.2/bin
mongo

### Example usage
db.Todos.insert({key: value})
db.Todos.find()