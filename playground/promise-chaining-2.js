require("../src/db/mongoose");

const Task = require("../src/models/task");

/*Task.findByIdAndDelete("60104a286a14bd4bd00f9cf0")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });*/

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("60104a286a14bd4bd00f9cf0")
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
