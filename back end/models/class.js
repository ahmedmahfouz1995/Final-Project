const mongoose = require("mongoose");
const classSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },

  startDate: {
    type: Date,
    required: true,
  },

  endDate: {
    type: Date,
    required: true,
  },

  schedule: [
    {
      type: Date,
      required: true,
    },
  ],

  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
  ],
});

module.exports = mongoose.model("Class", classSchema);
