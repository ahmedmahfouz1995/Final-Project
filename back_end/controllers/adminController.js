const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const adminModel = require("../models/admin");
const classModel = require("../models/class");
const studentModel = require("../models/student");
const teacherModel = require("../models/teacher");
const sendEmail = require("../service/email.service");



const signupAdmin = async (req, res) => {
try{


 
        const {
            name,
            email,
            password
        } = req.body


        const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALTROUNDS))
        const newadmin = new adminModel({
            name,
            email,
            password: hashPassword
        })

        const savedadmin = await newadmin.save()

        const token = jwt.sign({
            id: savedadmin._id
        }, process.env.EMAILTOKEN, {
            expiresIn: '1h'
        })
        const link = `${req.protocol}://${req.headers.host}/admin/confirmEmail/${token}`
        const link2 = `${req.protocol}://${req.headers.host}/admin/${savedadmin._id}`
        message = `<a href=${link}>please click to confirm Email<a/> <br>
           <a href='${link2}'>re-send conFirm Email</a>
`
        sendEmail(savedadmin.email, message)
        res.status(201).json({
            message: "done",
            savedadmin
        })
    }catch(e){

    if(e.keyValue?.email){

        res.status(409).json({message:"email exists"})

    }else{
        res.status(500).json({message:"Error",e})
    }
}




}
// REFRESH EMAIL------------------------------------------------
const refreshEmail = async (req, res) => {
    try {
        const {
            id
        } = req.params

        const admin = await adminModel.findById(id).select('confirmEmail email')

        if (!admin) {
            res.status(404).json({
                message: 'invalid account'
            })

        } else {

            if (admin.confirmEmail) {
                res.status(400).json({
                    message: 'Email is Already Confirmed'
                })


            } else {
                const token = jwt.sign({
                    id: admin._id
                }, process.env.EMAILTOKEN, {
                    expiresIn: '1h'
                })
                const link = `${req.protocol}://${req.headers.host}/admin/confirmEmail/${token}`
                const link2 = `${req.protocol}://${req.headers.host}/admin/refreshEmail/${admin._id}`
                message = `<a href=${link}>please click to confirm Email<a/> <br>
                       <a href='${link2}'>re-send conFirm Email</a>
            `

                sendEmail(admin.email, message)
                res.status(209).json({
                    message: 'plaese check your Email'
                })
            }


        }
    } catch (e) {
        res.status(500).json({
            message: 'Error',
            e
        })
    }

}


// CONFIRM EMAIL------------------------------------------------

const confirmEmail = async (req, res) => {
    try {


        const {
            token
        } = req.params
        const decoded = jwt.verify(token, process.env.EMAILTOKEN)
        if (!decoded) {

            res.status(400).json({
                message: "in-valid token"
            })
        } else {

            const admin = await adminModel.findById(decoded.id).select('confirmEmail') //{} or null

            if (!admin) {

                res.status(400).json({
                    message: "in-valid token id"
                })

            } else {

                if (admin.confirmEmail) {

                    res.status(400).json({
                        message: 'u are already confirmed please proceed to login pages'
                    })

                } else {

                    await adminModel.findByIdAndUpdate(admin._id, {
                        confirmEmail: true
                    }, {
                        new: true
                    })

                    res.status(200).json({
                        message: "please login "
                    })

                }

            }
        }
    } catch (e) {

        res.status(500).json({
            message: 'catch err confirm email',
            e
        })


    }
}

// SEND CODE----------------------------------------------

const sencode = async (req, res) => {

    const {
        email
    } = req.body

    const admin = await adminModel.findOne({
        email
    })
    if (!admin) {

        res.status(404).json({
            message: 'invalid email '
        })

    } else {

        const code = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
        message = `<p>use this code to reset your password ${code} </p>`
        await adminModel.findByIdAndUpdate(admin._id, {
            code
        })
        //   sendEmail(email,message)
        res.status(200).json({
            message: 'Done'
        })

    }



}


//LOGIN------------------------------------------------

const signinAdmin = async (req, res) => {

    try {
        const {
            email,
            password
        } = req.body

        const admin = await adminModel.findOne({
            email
        })
        if (!admin) {

            res.status(404).json({
                message: "sorry the email not founded"
            })

        } else {

            if (!admin.confirmEmail) {

                res.status(400).json({
                    message: "please confirm Your Email"
                })

            } else {

                const match = await bcrypt.compare(password, admin.password)

                if (!match) {

                    res.status(400).json({
                        message: "invalid pass"
                    })
                } else {


                    const token = jwt.sign({
                        id: admin._id,
                        loggedIn: true
                    }, process.env.LOGINTOKEN, {
                        expiresIn: '1h'
                    })
                    await adminModel.findByIdAndUpdate(admin._id, {
                        online: true
                    })
                    res.status(200).json({
                        message: "login success",
                        token
                    })


                }
            }

        }

    } catch (e) {

        res.status(500).json({
            message: 'catch err login'
        })

    }
}

//getAllAdmin  -----------------------------------------------------------------------------


const getAllAdmin=async (req, res) => {

 
        const findAdmins=await adminModel.find()
        if(findAdmins.confirmEmail === false) res.json({message: 'plz confirm u email'})
  
        res.status(200).json({message:findAdmins});




}

//getAdminById  -----------------------------------------------------------------------------

const getAdminById=async (req, res) => {

    try{
        const {id}=req.params
        const findAdmin=await adminModel.findById({_id:id})
        
        if(!findAdmin.confirmEmail) res.json({message: 'plz confirm u email'})
        
        
        if(!findAdmin) {
            res.json({message:'not fonunded'})
        }
        
        res.json({message:'done findAdmin',findAdmin})
        
    }catch (e) {
        
res.json({message:'error in findAdmins '})

    }


}
//addTeacher  -----------------------------------------------------------------------------

const addTeacher=async (req, res) => {
    console.log(req.body);

try{
    const {name,email,password,DOB,gender,phone,subjects}=req.body
    const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALTROUNDS))
const newTeacher=new teacherModel({name,email,password:hashPassword,DOB,gender,phone,subjects})
const savedTeacher=await newTeacher.save()
res.json({message:savedTeacher})

}catch(e){

    if(e.keyValue?.email){

        res.status(409).json({message:"email exists"})

    }else{
        res.status(500).json({message:"Error",e})
    }
}
}
//addStudent  -----------------------------------------------------------------------------


const addStudent=async (req, res) => {
try{
    const {name,email,password,DOB,gender,phone,student_subjects}=req.body
    const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALTROUNDS))
const newStudent=new studentModel({name,email,password:hashPassword,DOB,gender,phone,student_subjects})
const savedStudent=await newStudent.save()
res.json({message:savedStudent})

}catch(e){

    if(e.keyValue?.email){

        res.status(409).json({message:"email exists"})

    }else{
        res.status(500).json({message:"Error",e})
    }
}

}
//addClass  -----------------------------------------------------------------------------


const addClass=async (req, res) => {
    try{
const classData=req.body

const newClass = new classModel(classData)
const saveClass =await newClass.save()
res.json({message:"saved",saveClass})

    }catch(e){
        if(e.keyValue?.title){

            res.status(409).json({message:"title exists"})
    
        }else{
            res.status(500).json({message:"Error",e})
        }
    
    }
}
 //editTeacher  -----------------------------------------------------------------------------
 
const editTeacher=async (req, res) => {
try{
const {id}=req.params
const editTheTeacher=req.body

const findTeacher=await teacherModel.findById({_id:id})

if(!findTeacher) return res.json({message:"Teacher not found"})

const updateTeacher= await teacherModel.findByIdAndUpdate({_id:id},editTheTeacher)

res.status(200).json({message:"Teacher updated",updateTeacher})

}catch(err){

    res.json({message:"Catch editStudent Error"})
    
    }
}

//editStudent  -----------------------------------------------------------------------------


const editStudent=async (req, res) => {
try{


    const {id}=req.params
    const editTheStudent=req.body
    
    const findStudent=await studentModel.findById({_id:id})
    
    if(!findStudent) return res.json({message:"Student not found"})
    
    const updateTeacher= await studentModel.findByIdAndUpdate({_id:id},editTheStudent)
    
    res.status(200).json({message:"Teacher updated",updateTeacher})

}catch(err){

res.json({message:"Catch editStudent Error"})

}
}
    
//editClass  -----------------------------------------------------------------------------


const editClass=async (req, res) => {
try{
    const {id}=req.params
    console.log({id});
    const editTheClass=req.body
    
    const findClass=await classModel.findById({_id:id})
    
    if(!findClass) return res.json({message:"Class not found"})
    
    const updateClass= await classModel.findByIdAndUpdate({_id:id},editTheClass)
 
    
    res.status(200).json({message:"Teacher updated",updateClass})
}catch(err){

    res.json({message:"Catch editStudent Error"})
    
    }
    }
    
    // deleteTeacher----------------------------------
const deleteTeacher=async (req, res) => {


const {id}=req.params

const findTeacher=await teacherModel.findById(id)


if(!findTeacher) res.json({message: 'Sorry cant find your choice'})


await teacherModel.findByIdAndDelete(id)

res.json({message: 'deleted Success'})
}

    // deleteStudent----------------------------------
const deleteStudent=async (req, res) => {


const {id}=req.params

const findStudent=await studentModel.findById(id)


if(!findStudent) res.json({message: 'Sorry cant find your choice'})


await studentModel.findByIdAndDelete(id)

res.json({message: 'deleted Success'})
}

    // deleteClass----------------------------------
const deleteClass=async (req, res) => {


const {id}=req.params

const findClass=await classModel.findById(id)


if(!findClass) res.json({message: 'Sorry cant find your choice'})


await classModel.findByIdAndDelete(id)

res.json({message: 'deleted Success'})
}

// getAllTeachers---------------------------------------------------------------
const getAllTeachers =async (req, res)=>{

    
const findTeachers=await teacherModel.find()
if(findTeachers.confirmEmail === false) res.json({message: 'plz confirm u email'})
res.status(200).json(findTeachers);


}
const getTeacherById =async (req, res)=>{   

    try{
        const {id}=req.params
        const findTeacher=await teacherModel.findById({_id:id})
        
        
        
        if(!findTeacher) {
            res.json({message:'not fonunded'})
        }
        
        res.json(findTeacher)
        
    }catch (e) {
        
res.json({message:'error in getTeacherById '})

    }


}
// ----------------------------------------------------------------
const getAllStudents =async (req, res)=>{

    const findStudents=await studentModel.find()
    if(findStudents.confirmEmail === false) res.json({message: 'plz confirm u email'})
    res.status(200).json(findStudents);
     
}

const getStudentById =async (req, res)=>{

    try{
        const {id}=req.params
        const findStudent=await studentModel.findById({_id:id})
        
        
        
        if(!findStudent) {
            res.json({message:'not fonunded'})
        }
        
        res.json(findStudent)
        
    }catch (e) {
        
res.json({message:'error in findStudent '})

    }
}
// ---------------------------------------------------------------
const getAllClasses =async (req, res)=>{

    const findClasses=await classModel.find()
res.status(200).json(findClasses);

}
const getClassById =async (req, res)=>{

    try{
        const {id}=req.params
        const findClasse=await classModel.findById({_id:id})
                
        
        if(!findClasse) {
            res.json({message:'not fonunded'})
        }
        
        res.json(findClasse)
        
    }catch (e) {
        
res.json({message:'error in findClasse '})

    }
}










module.exports = {
    signupAdmin,
    refreshEmail,
    confirmEmail,
    signinAdmin,
    getAllAdmin,
    getAdminById,
    addTeacher,
    addStudent,
    addClass,
    editTeacher,
    editClass,
    editStudent,
    deleteTeacher,
    deleteStudent,
    deleteClass,
    getAllTeachers,
getTeacherById,
getAllStudents,
getStudentById,
getAllClasses,
getClassById,
}