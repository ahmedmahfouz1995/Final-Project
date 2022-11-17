const { signupAdmin, confirmEmail, refreshEmail, signinAdmin, getAllAdmin, getAdminById, addTeacher, addStudent, addClass, editTeacher, editClass, editStudent, deleteTeacher, getAllTeachers, getTeacherById, getAllStudents, getStudentById, getAllClasses, getClassById, deleteStudent, deleteClass } = require('../controllers/adminController');
const { signUpValidation, getAdminValidation, EditByAdminValidation, DeleteByAdminValidation } = require('./VaidationsCruds/adminValidation');
const { endPoint } = require('../endPoint/endPoint');
const { authen } = require('../middlewear/authen');
const { validation } = require('../middlewear/validation');



const router=require('express').Router();


router.post('/signupAdmin',validation(signUpValidation),signupAdmin)
router.post('/signinAdmin',signinAdmin)
router.get('/confirmEmail/:token',confirmEmail)
router.get('/refreshEmail/:token',refreshEmail)
router.get('/getAllAdmin',authen(endPoint.admin.getAllAdmins),getAllAdmin)
router.get('/getAdminById/:id',validation(getAdminValidation),authen(endPoint.admin.getAllAdmins),getAdminById)
router.post('/addTeacher',authen(endPoint.admin.getAllAdmins),addTeacher)
router.post('/addStudent',authen(endPoint.admin.getAllAdmins),addStudent)
router.post('/addClass',authen(endPoint.admin.getAllAdmins),addClass)
router.put('/editTeacher/:id',validation(EditByAdminValidation),authen(endPoint.admin.editAdmin),editTeacher)
router.put('/editStudent/:id',validation(EditByAdminValidation),authen(endPoint.admin.editAdmin),editStudent)
router.put('/editClass/:id',validation(EditByAdminValidation),authen(endPoint.admin.editAdmin),editClass)
router.delete('/deleteTeacher/:id',validation(DeleteByAdminValidation),authen(endPoint.admin.deleteAdmin),deleteTeacher)
router.delete('/deleteStudent/:id',validation(DeleteByAdminValidation),authen(endPoint.admin.deleteAdmin),deleteStudent)
router.delete('/deleteClass/:id',validation(DeleteByAdminValidation),authen(endPoint.admin.deleteAdmin),deleteClass)


router.get('/getAllTeachers',getAllTeachers)
router.get('/getTeacherById/:id',validation(getAdminValidation),authen(endPoint.admin.adminAllCourses),getTeacherById)
router.get('/getAllStudents',authen(endPoint.admin.adminAllCourses),getAllStudents)
router.get('/getStudentById/:id',validation(getAdminValidation),authen(endPoint.admin.adminAllCourses),getStudentById)
router.get('/getAllClasses',authen(endPoint.admin.adminAllCourses),getAllClasses)
router.get('/getClassById/:id',validation(getAdminValidation),authen(endPoint.admin.adminAllCourses),getClassById)


module.exports =router

