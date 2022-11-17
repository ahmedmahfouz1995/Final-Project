const mongoose = require("mongoose");
const teacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    default: ' '
  },
  DOB: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    default: 'male'
  },
  phone: {
    type: String
  },
  subjects: { // بتاعه الماده id واخد ال 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  },
  confirmEmail: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    default: 'teacher'
  },
  profile_image:{
    type: String,
    default:"https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
  },
  approved:{
    type:Boolean,
    required:true,
    default:false,
    index: true // grouping بيعمل 
  }
});

const teacherModel = mongoose.model('Teacher', teacherSchema)

module.exports = teacherModel