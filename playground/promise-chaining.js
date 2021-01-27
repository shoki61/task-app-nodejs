require("../src/db/mongoose");

const User = require("../src/models/user");

User.findByIdAndUpdate("600ee137f1458b1224ce1dcc", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
