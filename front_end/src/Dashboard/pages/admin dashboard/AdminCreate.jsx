import React from 'react'
import { useDispatch } from 'react-redux';
import {createTeacher, getAllTeachers, setTeacherProfile} from '../../store/reducer/TeacherSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from 'react-router-dom';
import { getAllclass } from '../../store/reducer/classSlice';

export default function AdminCreate() {
    const {TeacherData,isAdmin,isUpdated}=useSelector(
        (state) => state.Teachercontx
      );

      const dispatch = useDispatch()
      const {classData}=useSelector(state=>state.classcontx)
      const [data,setData]=useState({})
      const [err, setErr] = useState({});
      const param =useParams()
      const {id}=param
      useEffect(()=>{
          dispatch(getAllTeachers())
          dispatch(getAllclass())
        },[])   
        const TeacherProfile = TeacherData.filter((teacher)=>teacher._id===id)
        const subjectToShow=classData.filter((course)=>course.title===TeacherProfile[0].subjects)
    const save=(e)=>{
        dispatch(createTeacher({data,isAdmin}))
    }
   const handleChange = (e) => {
     if (e.target.value==="") {
       setErr({...err,[e.target.name]:`${e.target.name} is required`})
     } else if(e.target.value.length<5) {
       setErr({...err,[e.target.name]:`${e.target.name} must be more than 5 letters`})}
     else{
       setData({...data,[e.target.name]:e.target.value})
       setErr({[e.target.name]:""})
     }
     }

  return (
    <>
<div className="mt-10 sm:mt-0 justify-center">
  <div className="md:grid-8 md:grid-cols-3 md:gap-6 mx-20">
    <div className="mt-5 md:col-span-2 md:mt-0">
    <h1 className='font-black my-3 text-center'>Teacher Profile</h1>    
    <Form className="col-12" onChange={(e)=>handleChange(e)} onSubmit={save}>
        {console.log(TeacherProfile)}
              <Form.Group className="my-4" controlId="formBasicName" >
                <Form.Control type="text"defaultValue={TeacherProfile[0]?.name}  placeholder="Enter Your Name" className="py-3" name="name"/>
              </Form.Group>
              <Form.Group className="my-4" controlId="formBasicEmail" >
                <Form.Control type="email" defaultValue={TeacherProfile[0]?.email}  placeholder="Enter Your Email" className="py-3" name="email"/>
              </Form.Group>

              <Form.Group className="my-4" controlId="formBasicPassword" >
                <Form.Control type="password" defaultValue={TeacherProfile[0]?.password}  placeholder="Enter Your Password"  className="py-3" name="password"/>
              </Form.Group>

              <Form.Group className="my-4" controlId="formBasicPhone" >
                <Form.Control type="text"  defaultValue={TeacherProfile[0]?.phone} placeholder="Enter Your Phone" className="py-3" name="phone"/>
              </Form.Group>              

              <Form.Group className="my-4 flex gx-2" controlId="formBasicDobAndGender">
              <label className="my-4">birth date</label>
              <input  type="date" name="DOB" id="DOB" defaultValue={TeacherProfile[0]?.DOB}  autoComplete="street-address" className="mt-1 mr-2  w-45 h-10 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              <label className="my-4"  >Enter Your Gender</label>
              <select name="gender" defaultValue={TeacherProfile[0]?.gender} className="form-select appearance-non w-45 px-3 py-1.5 text-base font normal text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option value="male" >Male</option>
        <option value="female">Female</option>
    </select>
              </Form.Group>              
              <Form.Group  className="my-4" controlId="formBasicPassword" >
              <select  defaultValue={subjectToShow[0]?._id} name="subject" className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                <option key={subjectToShow[0]?._id} value={subjectToShow[0]?._id} >{subjectToShow[0]?.title}</option>
        {classData.map((course)=>{
            if (course?._id!==subjectToShow[0]?._id) {
                return(
                    <option key={course._id} value={course._id} >{course.title}</option>
                )
            }
        })}
    </select>
              </Form.Group>              
              <Button   variant="primary" type="submit" className="col-12 registerBtn text-light p-3 rounded hover:opacity-95 transtion myFormBtn">
                Register Now
              </Button>
            </Form>
    </div>
  </div>
</div>
    </>
  )
}
