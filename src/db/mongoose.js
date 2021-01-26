const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowerCase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not a valid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
    validate(value) {
      if (value.includes("password")) {
        throw new Error("not a valid password!");
      }
    },
  },
});

const usmurtier = new User({
  name: "shoki",
  password: "Mynewpassword",
  email: "   murti@gmail.com  ",
});

usmurtier
  .save()
  .then(() => {
    console.log(usmurtier);
  })
  .catch((error) => {
    console.log(error);
  });
