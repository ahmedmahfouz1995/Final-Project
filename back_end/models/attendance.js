const mongoose = require("mongoose");
const attendanceSchema = mongoose.Schema({
    classTitle: {
    type: String,
    // required: true,
  },
  teacher: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    default: null
  },
  subject: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    default: null
  },
  students : [
  
      {
        _id:{
         type :  mongoose.Schema.Types.ObjectId,
          ref: "Student",
          default:null

        },
        attendenceStuts:{
          type: Boolean,  
          default:true
        }
      }
  ]
});

const attendanceModel = mongoose.model('attendanceSheet', attendanceSchema)

module.exports = attendanceModel