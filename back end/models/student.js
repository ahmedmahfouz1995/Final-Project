const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
const StudentModel = mongoose.model("Student", studentSchema);

module.exports = StudentModel
