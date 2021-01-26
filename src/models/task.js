const mongoose = require("mongoose");
const validator = require("validator");

const Task = mongoose.model("task", {
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

module.exports = Task;
