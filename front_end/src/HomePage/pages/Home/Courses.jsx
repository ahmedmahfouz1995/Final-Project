import React from "react";
import Cards from "../../components/Cards";
import course1 from "./../../assets/edu4.jpeg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import breaks from "./../../assets/333pn.png";
import lamp from "./../../assets/pg77777.png"
import paper from "./../../assets/pg8888.png"
export default function Courses() {

  const courses = [
    { name: "course1", instructor: "Ahmed", price: 100 },
    { name: "course2", instructor: "Mohamed", price: 70 },
    { name: "course3", instructor: "Ali", price: 80 },
    { name: "course4", instructor: "Omar", price: 90 },
  ];

  const cardCom = {
    img: course1,
    title: "courseOne",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, corporis.",
    salary: "9.99",
  };

  return (
    <>

    <section className="courseSection mb-5 ">

             <img className="col-12 flex justify-content-center items-center relative" src={paper} alt="" />
      <div className="container corsesSection">
        <div className="row">
          <div className="flex justify-center items-center my-5 ">
            <h1 className="relative text-center  ">
            <span className="text-lower-left">OUR </span> <span className="text-lower-right">COURSES</span>
            </h1>
          

          </div>

          <div className="row">
          {courses &&
          courses.map((course) => (
            <div className="col-md-4 col-sm-6 py-2 my-5">
              <Card className="courseCard">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title className="fw-bold">{course.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {course.instructor} . {course.class}
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title.
                  </Card.Text>
                  <Button variant="btn btn-outline-primary" className="mt-3">
                    Details
                  </Button>
                  <p className="coursePrice py-2 px-3 text-light">{course.price} $</p>
                </Card.Body>
              </Card>
            </div>
          ))}

        </div>
  

          {/* <Cards cardCom={cardCom} />
          <Cards cardCom={cardCom} />
          <Cards cardCom={cardCom} />
          <Cards cardCom={cardCom} /> */}
        </div>
      </div>
    </section>

 

  </>
  );
}
