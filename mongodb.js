const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {
    if (error) {
        return console.log('unable to connect to the database');
    };
    const db = client.db(databaseName);
     
    db.collection('tasks').insertMany([
        {
            description: 'start mongodb',
            completed: true
        },
        {
            description: 'send multiple collections',
            completed: true
        }
    ], (error, result) => {
            if (error) {
                return console.log('unable to insert collections to the database')
            }
            console.log('inserted successfully')            
    })
});
