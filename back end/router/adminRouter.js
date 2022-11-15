const { signupAdmin, confirmEmail, refreshEmail, signinAdmin, getAllAdmin, getAdminById, addTeacher, addStudent, addClass, editTeacher, editClass, editStudent, deleteTeacher } = require('../controllers/adminController');
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


module.exports =router

