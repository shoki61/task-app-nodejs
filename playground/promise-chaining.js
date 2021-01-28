require("../src/db/mongoose");

const User = require("../src/models/user");

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("600ee137f1458b1224ce1dcc", 125)
  .then((count) => console.log(count))
  .catch((error) => {
    console.log(error);
  });
