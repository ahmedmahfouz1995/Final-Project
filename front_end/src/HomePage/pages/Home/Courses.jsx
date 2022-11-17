import React, { useEffect } from "react";
import Cards from "../../components/Cards";
import course1 from "./../../assets/edu4.jpeg";
import Teachercontx from './../../../Dashboard/store/index'
import { useDispatch, useSelector } from "react-redux";
import { getAllTeachers } from "../../../Dashboard/store/reducer/TeacherSlice";



export default function Courses() {
const {TeacherData}=useSelector((state)=>state.Teachercontx)
const dispatch=useDispatch()
useEffect(() => {
    dispatch(getAllTeachers())
    
},[])

// const cardCom = {
//     img: course1,
//     title: "courseOne",
//     caption:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, corporis.",
//     salary: "9.99",
//   };

  return (
    <section className="courseSection mb-5 ">
      <div className="container">
        <div className="row">
          <div className="flex justify-center items-center my-5">
            <span className="relative text-center text-lower ">
              Learn, know, Enjoy{" "}
            </span>
            <p className="absolute text-center upper-text rounded-2xl">
              Popular Courcess
            </p>
          </div>

{/* card */}
{
 TeacherData.map((teacher,index)=>{

    
return (
 <Cards cardCom={teacher} key={index} />
 )
})
          }
{/* <Cards cardCom={teacher} key={index} /> */}
{/* <Cards cardCom={cardCom} /> */}

  
        </div>
      </div>
    </section>
  );
}
