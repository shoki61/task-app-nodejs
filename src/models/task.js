const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'User'
  }
});


taskSchema.pre("save", async function (next) {
  const task = this;
  if (task.isModified("description")) {
    task.description = await bcrypt.hash(task.description, 8);
  }

  next();
});

const Task = mongoose.model("task", taskSchema);

module.exports = Task;
