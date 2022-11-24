import React from "react";
// import { Button, Card } from "react-bootstrap";
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import ShowTeacher from "./ShowTeacher";

export default function Teacher() {
  const Location =useLocation()
  let myLocation=Location.pathname
  return<>
  {/* <div className="page text-center fs-5 p-5 bg-light d-flex justify-content-center row">
    <div className="col-md-6">
    <Card style={{ width: '30rem' }} className="ms-5">
      <Card.Img className="card-img" variant="top" src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      <Card.Body>
        <Card.Title>Fly Zend</Card.Title>
        <div className="row">
        <Card.Text className="col-md-4">
        Head of Dept.
        </Card.Text>
        <Card.Text className="col-md-4">
        fly@gmail.com
        </Card.Text>
        <Card.Text className="col-md-4">
        +01962067309
        </Card.Text>
        </div>
        <Button variant="primary">Update Data</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-6">
      <h1 className="mb-5">To Do</h1>
      <div className="row">
        <NavLink className="col-md-3 text-decoration-none " to="/students">
          <img className="tech-img" src="/assets/students.png" alt="students"></img>
          <h3 className="text-decoration-none mt-3">Students</h3>
        </NavLink>
        <NavLink className="col-md-3 text-decoration-none"  to="/courses">
          <img className="tech-img" src="/assets/courses.png" alt="courses"></img>
          <h3 className="text-decoration-none mt-3">Courses</h3>
        </NavLink>
        <NavLink className="col-md-3 text-decoration-none" to="/meetings">
          <img className="tech-img"  src="/assets/meetings.png" alt="meetings"></img>
          <h3 className="text-decoration-none mt-3">Meetings</h3>
        </NavLink>
        <NavLink className="col-md-3 text-decoration-none" to="/attendance">
          <img className="tech-img"  src="/assets/attendance.png" alt="attendance"></img>
          <h3 className="text-decoration-none mt-3">Attendance</h3>
        </NavLink>
        <NavLink className="col-md-3 text-decoration-none" to="/exams">
          <img className="tech-img"  src="/assets/exams.png" alt="exams"></img>
          <h3 className="text-decoration-none mt-3">Exams</h3>
        </NavLink>
      </div>
    </div>
  
    </div>; */}
    <>
<div className="border-b border-gray-200 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400" >
       <NavLink className="text-decoration-none"  to={"/teacher"} >
        <li className="mr-2" >
        <p className="inline-flex  p-4 rounded-t-lg border-b-2 Parentborder-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg aria-hidden="true" className="mr-2 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>Profile
            </p>
        </li>
        </NavLink>
       <NavLink className="text-decoration-none"  to={"/teacher/students"}>
        <li className="mr-2">
        <p className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg aria-hidden="true" className="mr-2 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>My Students
            </p>
        </li>
       </NavLink>
       <NavLink className="text-decoration-none"  to={"/teacher/courses"}>
        <li className="mr-2">
        <p className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg aria-hidden="true" className="mr-2 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>My Courses
            </p>
        </li>
       </NavLink>
       <NavLink className="text-decoration-none"  to={"/teacher/meetings"}>
        <li className="mr-2">
        <p className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg aria-hidden="true" className="mr-2 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>Meetings
            </p>
        </li>
       </NavLink>
       <NavLink className="text-decoration-none"  to={"/teacher/attendance"}>
        <li className="mr-2">
        <p className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg aria-hidden="true" className="mr-2 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>Attendance
            </p>
        </li>
       </NavLink>
       <NavLink className="text-decoration-none"  to={"/teacher/exams"}>
        <li className="mr-2">
        <p className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg aria-hidden="true" className="mr-2 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>Exams
            </p>
        </li>
       </NavLink>
       {/* <NavLink className="text-decoration-none"  activeClassName="text-blue-600">
        <li className="mr-2">
            <p className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg aria-hidden="true" className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>Settings
            </p>
        </li>
       </NavLink> */}
       {/* <NavLink  className="text-decoration-none"  activeClassName="text-blue-600">
        <li className="mr-2">
            <p  className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg aria-hidden="true" className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>Contacts
            </p>
        </li>
       </NavLink> */}
    </ul>
</div>
{
 myLocation==="/teacher" ?<ShowTeacher></ShowTeacher> : null

}
    <Outlet />
    </>
  </>
}
