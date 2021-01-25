const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to the database");
    }
    const db = client.db(databaseName);

    db.collection("tasks").findOne(
      { _id: ObjectID("600dd80479d31c19844c9090") },
      (error, task) => {
        if (error) {
          return console.log(error);
        }
        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
