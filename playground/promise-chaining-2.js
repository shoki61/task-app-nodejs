require("../src/db/mongoose");

const Task = require("../src/models/task");

Task.findByIdAndDelete("600ee95cd1fd2e0cb044664c")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
