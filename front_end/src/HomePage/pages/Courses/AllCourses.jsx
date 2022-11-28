import React from "react";
import CourseBanner from "./CourseBanner";
import { NavLink } from "react-router-dom";
import breaks from "./../../assets/333pn.png";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function AllCourses() {
  const courses = [
    { name: "course1", instructor: "Ahmed", price: 100 },
    { name: "course2", instructor: "Mohamed", price: 70 },
    { name: "course3", instructor: "Ali", price: 80 },
    { name: "course4", instructor: "Omar", price: 90 },
  ];

  return (
    <>
      <CourseBanner />
      <div className="breaksColors conatiner-fluid flex justify-center">


<img  alt="....." className="breaksColorsImg " src={breaks} />
<img alt="....." className="breaksColorsImg " src={breaks} />
<img  alt="....."className="breaksColorsImg " src={breaks} />
<img  alt="....."className="breaksColorsImg " src={breaks} />



      </div>
    <div className="container py-5">
    <h1 className="relative text-center  ">
            <span className="text-lower-left">My </span> <span className="text-lower-right">COURSES</span>
            </h1>
          
      <div className="row">
        {courses &&
          courses.map((course) => (
            <div className="course my-3 col-10 m-auto d-md-flex bg-light rounded">
              <div className="col-md-2">
                <img alt="..." src="holder.js/100px180" className="col-12 rounded" />
              </div>

              <div className="col-md-7 px-4 pt-5">
                <h4>{course.name}</h4>
                <p>By {course.instructor}</p>
              </div>

              <div className="col-md-3 d-flex align-items-center">
                <button className="btn mx-4 themeColor">Details</button>
                <i className="bx bx-video fs-2 meetIcon"></i>
              </div>
            </div>
          ))}
      </div>
    </div>
  
  </>);
}
