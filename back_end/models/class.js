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
Image_url:{
type:String,
required:true,
default:'https://th.bing.com/th/id/R.5a75c689f1f5f06c0ac789cf64553e49?rik=LFiH08kw%2boO3YA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-hqvNU3YqpKE%2fVlQMrqgcz7I%2fAAAAAAAAAhM%2fzHUanL8vm0I%2fs1600%2f5978e821.jpg&ehk=V8IZrxeibDsb9lmuwmH9ZcEiKgzAxgT1vWDhNQU1LUc%3d&risl=&pid=ImgRaw&r=0'
},
class:{
type:String,
required:true,
default:'1st class '
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
