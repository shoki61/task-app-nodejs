const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {
    if (error) {
        return console.log('unable to connect to the database');
    };
    const db = client.db(databaseName);
    db.collection('users').insertOne({
        name: 'shoki',
        surname: 'çepni',
        age: 24,
        hometown: 'trabzon'
    });

    db.collection("users").insertMany(
      [{
        name: "murti",
        surname: "çepni",
        age: 24,
        hometown: "giresun",
      },
      {
        name: "shokimurti",
        surname: "çepni",
        age: 24,
        hometown: "trabzon",
        }],
        (error,result) => {
            if (error) {
              return console.log('unable to insert the document')
            };
            console.log(result.ops)
      }
    );
});
