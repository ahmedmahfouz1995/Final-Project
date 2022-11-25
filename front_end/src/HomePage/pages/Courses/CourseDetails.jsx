import React, { useEffect } from "react";
import CourseBanner from "./CourseBanner";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAllclass } from "../../../Dashboard/store/reducer/classSlice";
import { NavLink } from "react-router-dom";

export default function CourseDetails() {

    const {classData}=useSelector(state=>state.classcontx)
    const dispatch=useDispatch()
  const {state} = useLocation();
  console.log("state-----------",state);
//   const {title,startDate,endDate} = state
// console.log("title sate=====================",title)
//   //   console.log(state.name);
// const {id}=useParams()

// // const classToShow=classData.filter(class => class._id === id )
// const classToShow = classData.filter(theClass => theClass._id === id);

const diffTime = Math.abs( state.endDate- state.startDate );
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log("start date---------",state.startDate.split("T")[0])
console.log("endDate------------",state.endDate.split("T")[0])

console.log(diffTime);
console.log(diffDays);

useEffect(()=>{

    dispatch(getAllclass())


},[])
// console.log("classToShow--------->",classToShow);
// console.log("classData--------->",classData);
  return (
    <div>
      <CourseBanner Title={state.title}></CourseBanner>
      <div className="container-fluid">
        <div className="row mt-5 p-5">
          <div className="col-lg-8">
            <div className="course-details-content">
              <h2 className="mb-5">
                {state.title}
              </h2>
              <ul className="best-seller">
                <li>8 Students</li>
                <li>Last Updated 8/23/2022</li>
              </ul>
              <div className="admin-info d-flex align-items-center justify-content-start">
                <a className="text-decoration-none" href="/instructor/">
                  <img
                    src="https://res.cloudinary.com/dev-empty/image/upload/v1661245253/wqsnxv0pfdwl2abdakf5.jpg"
                    alt="Admin"
                  />
                  <span>Created By {state?.teacher?.name}</span>
                </a>
              </div>
              <div className="this-course-content my-5">
                <h4 className="fw-bold">What you'll learn In This Course</h4>
                <div>
                  <ul>
                    <li className="text-secondary">
                      We will learn how to do correctly warm up
                    </li>
                    <li className="text-secondary my-1">
                      We will learn why warm up is important
                    </li>
                    <li className="text-secondary my-1">
                      Improved fitness through exercises
                    </li>
                    <li className="text-secondary">
                      We will learn how we can contour our body shape
                    </li>
                  </ul>
                </div>
              </div>

              <Tabs
                defaultActiveKey="overview"
                id="justify-tab-example"
                className="mb-3 fw-bold p-2 tab-link"
                justify
              >
                <Tab eventKey="overview" title="Overview">
                  <p className="text-secondary">
                    {/* Pianoforall is one of the most popular online piano courses
                    with over 300,000 students worldwide Now ANYONE Can Learn
                    Piano or Keyboard Imagine being able to sit down at a piano
                    and just PLAY - Ballads, Pop, Blues, Jazz, Ragtime, even
                    amazing Classical pieces? Now you can... and you can do it
                    in months not years without wasting money, time and effort
                    on traditional Piano Lessons. */}
                    This is {state.title} course for {state.level} which is taught by one of the best Instructors in the arab world
                    Mr {state?.teacher?.name}<br></br>
                    There are more than {state.students.length} students.<br></br>
                    The Course starts at  {state.startDate.split("T")[0]}  and ends at  {state.endDate.split("T")[0]}<br></br>
                    Make sure to enroll as soon as possible
                  </p>
                </Tab>
                <Tab eventKey="requirements" title="Requirements">
                  <ul className="text-secondary">
                    <li>
                      You only need to study regularly, do the homeworks and solve the quizzes
                    </li>
                  </ul>
                </Tab>
                <Tab eventKey="who" title="Who is This Course For">
                  <ul className="text-secondary">
                  <li>You need to be at level {state.level} to enroll in the course</li>
                  </ul>
                </Tab>
              </Tabs>
            </div>
          </div>

          <div className="col-lg-4">
            <Card>
              <Card.Img
                variant="top"
                src={state.Image_url}
              />
              <Card.Body>
                <Card.Title>$ {state.price}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Start date : {state.startDate.split("T")[0]}</ListGroup.Item>
                <ListGroup.Item>End date : {state.endDate.split("T")[0]}</ListGroup.Item>

                <ListGroup.Item>Instructor : {state?.teacher?.name}</ListGroup.Item>
                <ListGroup.Item>Enrolled</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">
                    <NavLink to={"/admin/enroll/:classid"}>
                  <button className="btn btn-primary registerBtn py-3 buy col-12">Enroll Now</button>

                    </NavLink>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
