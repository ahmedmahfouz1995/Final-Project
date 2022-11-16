import React from "react";
import CourseBanner from "./CourseBanner";
import { NavLink } from "react-router-dom";

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

      <div className="container my-5">
        <h2 className="text-center py-5 fw-bold">
          Expand Your Level with Our Courses
        </h2>

        <div className="row">
          {courses.map((course) => (
            <div className="col-4 mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text className="fw-bold my-1">
                    By {course.instructor}
                  </Card.Text>
                  <Card.Text className="fw-bold my-2">
                    ${course.price}
                  </Card.Text>
                  <NavLink className="nav-link" to="/course-details" state={course}>
                    <Button variant="primary">View Details</Button>
                  </NavLink>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
