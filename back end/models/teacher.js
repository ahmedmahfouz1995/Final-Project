const mongoose = require("mongoose");
const teacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Teacher", teacherSchema);
