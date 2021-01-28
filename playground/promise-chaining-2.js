require("../src/db/mongoose");

const Task = require("../src/models/task");

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
