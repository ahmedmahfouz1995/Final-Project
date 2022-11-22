const mongoose = require("mongoose");
const teacherModel = require("./teacher");
const classSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  teacher: {   //د ا الشخص الي كريته
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    default:null
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
type: String,
required:true, 
default:'10$'
},
level:{
type:String,
required:true,
default:'1st level'
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
classSchema.post('findByIdAndDelete', function(doc) {
  teacherModel.findOneAndUpdate({subject:doc._id},{$set:{subject:null}})
});
const classModel= mongoose.model('Class',classSchema)
module.exports =classModel
