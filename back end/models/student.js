const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
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
  subjects: [{ // بتاعه المواد id واخد ال 

    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'

  }],
  role: {
    type: String,
    default: 'student'
  },
  profile_image:{
    type: String,
    default:"https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
  }

});

const StudentModel = mongoose.model("Student", studentSchema);

module.exports = StudentModel

const studentModel = mongoose.model('Student', studentSchema)

module.exports = studentModel;



// student -> [class]
// class -> [students]

// create student class: [] -- has id
// create class student: [] -- has id

// subject:
// ["teacher"]

// cl
// fetch student id - 
// fetch class id

// student.classes.push("class_id")
// class.student.push("student_id")

// "->" means refer to:

// subject -> teacher:
// getById(subjectid, SubjectModel, ["teacher"])

// teacher -> subject
// getById(teacherId, TeacherModel, ["subject"])

// teacher -> [subjects]
// getById(teacherId, TeacherModel, ["subjects"])


