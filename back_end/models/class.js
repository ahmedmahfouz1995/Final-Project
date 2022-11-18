const mongoose = require("mongoose");
const classSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  teacher: {   //د ا الشخص الي كريته
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
price:{
type:String,
required:true,
default:'10$'

},
  schedule: [
    {
      type: Date,
      default:[]
    },
  ],

  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
      default:[]
    },
  ],

});
const classModel= mongoose.model('Class',classSchema)
module.exports =classModel
