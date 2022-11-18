import React from 'react'
import { useDispatch } from 'react-redux';
import {createTeacher, getAllTeachers} from '../../store/reducer/TeacherSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from 'react-router-dom';

export default function AdminCreate() {
    const {TeacherData,isAdmin}=useSelector(
        (state) => state.Teachercontx
      );
      const [teacherProfile,setTeacherProfile]= useState({})

      const dispatch = useDispatch()
      const {classData}=useSelector(state=>state.classcontx)
      const [data,setData]=useState({})
      const [err, setErr] = useState({});
      const param =useParams()
      const {id}=param

      useEffect(()=>{
     dispatch(getAllTeachers())
    setTeacherProfile(...TeacherData.filter((teacher)=>teacher._id===id))
    },[])
    const save=(e)=>{
        dispatch(createTeacher({data,isAdmin}))
    }
   const handleChange = (e) => {
     if (e.target.value==="") {
       setErr({...err,[e.target.id]:`${e.target.id} is required`})
     } else if(e.target.value.length<5) {
       setErr({...err,[e.target.id]:`${e.target.id} must be more than 5 letters`})}
     else{
       setData({...data,[e.target.id]:e.target.value})
       setErr({[e.target.id]:""})
     }
     }

  return (
    <>
<div className="mt-10 sm:mt-0 justify-center">
  <div className="md:grid-8 md:grid-cols-3 md:gap-6 mx-20">
    <div className="mt-5 md:col-span-2 md:mt-0">
    <h1 className='font-black my-3 text-center'>Teacher Profile</h1>    
    <Form className="col-12" onChange={(e)=>handleChange(e)} onSubmit={save}>
              <Form.Group className="my-4" controlId="formBasicName" >
                <Form.Control type="text"defaultValue={teacherProfile[0]?.name}  placeholder="Enter Your Name" className="py-3" name="name"/>
              </Form.Group>

              <Form.Group className="my-4" controlId="formBasicEmail" >
                <Form.Control type="email" placeholder="Enter Your Email" className="py-3" name="email"/>
              </Form.Group>

              <Form.Group className="my-4" controlId="formBasicPassword" >
                <Form.Control type="password" placeholder="Enter Your Password" className="py-3" name="password"/>
              </Form.Group>

              <Form.Group className="my-4" controlId="formBasicPhone" >
                <Form.Control type="text" placeholder="Enter Your Phone" className="py-3" name="phone"/>
              </Form.Group>              

              <Form.Group className="my-4 flex gx-2" controlId="formBasicDobAndGender">
              <input  type="date" name="DOB" id="DOB" autoComplete="street-address" className="mt-1 mr-2  w-45 h-10 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              <select name="gender" className="form-select appearance-none
      
      w-45
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option value="1" defaultValue>Enter Your Gender</option>
        <option value="male" >Male</option>
        <option value="female">Female</option>
    </select>

              </Form.Group>              
              
              <Form.Group className="my-4" controlId="formBasicPassword" >
              <select name="subject" className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
            rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option value="1" selected >Enter Your Subject</option>
        {classData.map((course)=>{
            return(
                <option value={course._id} >{course.title}</option>
            )
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
