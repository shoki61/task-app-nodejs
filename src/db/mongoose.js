const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const murti = new User({
  name: "shoki",
  age: 24,
});

murti
  .save()
  .then(() => {
    console.log(murti);
  })
  .catch((error) => {
    console.log(error);
  });
