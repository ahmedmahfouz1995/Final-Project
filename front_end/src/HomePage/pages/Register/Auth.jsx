import React, { useEffect, useState } from "react";
// import banner from "./../assets/register.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useDispatch, useSelector } from "react-redux";
import { createTeacher } from "../../../Dashboard/store/reducer/TeacherSlice";
import AuthBanner from "./AuthBanner";

export default function Auth() {
const [formValue,setFormValue]=useState({
  name:"",
  email:"",
  password:"",
  phone:"",
  DOB:"",
  gender:"",
  subject:"",
  role:"teacher"
})
const {TeacherData}=useSelector(state=>state.Teachercontx)
const dispatch=useDispatch()

const onChangeHandle=(e)=>{

  setFormValue({...formValue,[e.target.name]:e.target.value})

  
}
const submitHandler=(e)=>{
   
e.preventDefault()
console.log(createTeacher(formValue))
    console.log("form.................",formValue)
dispatch(createTeacher(formValue))

}
useEffect(()=>{

 

},[])



  return (
    <>
    <AuthBanner></AuthBanner>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 flex  justify-center items-center">
            <img
              className="relative z-50"
              src="https://edmy-react.hibootstrap.com/images/register-img.png"
              alt=""
            />
            <div className="bg-red-400 imgBackground opacity-80"></div>
          </div>

          <div className="col-md-6 flex flex-col justify-center items-center ">
            <div className="TransformLeft">
              <h1 className="font-bold mb-5">Create Your account</h1>
            </div>

            <Tabs
              defaultActiveKey="profile"
              id="fill-tab-example"
              className="col-12 mb-3 tab-link"
              fill
            >
               {/* Tab1 */}
              <Tab className="col-12 font-bold " eventKey="home" title="Register">
               
              <Form className="col-12" onChange={(e)=>onChangeHandle(e)} onSubmit={submitHandler}>
              <Form.Group className="my-4" controlId="formBasicName" >
                <Form.Control type="text" placeholder="Enter Your Name" className="py-3" name="name"/>
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
              <select name="gender" class="form-select appearance-none
      
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
        <option value="1" selected>Enter Your Gender</option>
        <option value="male" >Male</option>
        <option value="female">Female</option>
    </select>

              </Form.Group>              
              
              <Form.Group className="my-4" controlId="formBasicPassword" >
              <select name="subject" class="form-select appearance-none
      block
      w-full
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
        <option value="1" selected >Enter Your Subject</option>
        <option value="6377108dd827070560ea8322"  >Arabic</option>
        <option value="637710f4d827070560ea8327">Math</option>
        <option value="637710fdd827070560ea8329">Engilsh</option>
        <option value="63771102d827070560ea832b">Science</option>
        <option value="63771109d827070560ea832d">French</option>
        <option value="6377110fd827070560ea832f">History</option>
        <option value="63771114d827070560ea8331">Geography</option>
        <option value="63771118d827070560ea8333">Chemistry</option>
        <option value="6377111dd827070560ea8335">Biology</option>
        <option value="63771122d827070560ea8337">Algebra</option>
        <option value="63771128d827070560ea8339">Geometry</option>
        <option value="6377112dd827070560ea833b">Religion</option>
        <option value="63771133d827070560ea833d">Pysices</option>
    </select>
              </Form.Group>              

              
   


              <Button   variant="primary" type="submit" className="col-12 registerBtn text-light p-3 rounded hover:opacity-95 transtion myFormBtn">
                Register Now
              </Button>
            </Form>
              </Tab>
               {/* Tab2 */}
              <Tab className="col-12 font-bold " eventKey="profile" title="Login">
              <Form className="col-12">
              <Form.Group className="my-4" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" className="py-3"/>
              </Form.Group>

              <Form.Group className="my-4" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" className="py-3"/>
              </Form.Group>              

              <Button variant="primary" type="submit" className="col-12 registerBtn text-light p-3 rounded hover:opacity-95 transtion myFormBtn">
                Login Now
              </Button>
            </Form>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
