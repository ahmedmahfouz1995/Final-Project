import React from "react";
import CourseBanner from "./CourseBanner";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useLocation } from "react-router-dom";

export default function CourseDetails() {

  const {state} = useLocation();
  console.log(state.name);

  return (
    <div>
      <CourseBanner></CourseBanner>
      <div className="container-fluid">
        <div className="row mt-5 p-5">
          <div className="col-lg-8">
            <div className="course-details-content">
              <h2 className="mb-5">
                {state.name}
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
                  <span>Created By {state.instructor}</span>
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
                className="mb-3 fw-bold p-2"
                justify
              >
                <Tab eventKey="overview" title="Overview">
                  <p className="text-secondary">
                    Pianoforall is one of the most popular online piano courses
                    with over 300,000 students worldwide Now ANYONE Can Learn
                    Piano or Keyboard Imagine being able to sit down at a piano
                    and just PLAY - Ballads, Pop, Blues, Jazz, Ragtime, even
                    amazing Classical pieces? Now you can... and you can do it
                    in months not years without wasting money, time and effort
                    on traditional Piano Lessons.
                  </p>
                </Tab>
                <Tab eventKey="requirements" title="Requirements">
                  <ul className="text-secondary">
                    <li>You don't need any prior knowledge or experience</li>
                    <li>Pianoforall works equally well on Piano or Keyboard</li>
                    <li>
                      You only need to practice 20 minutes a day to make rapid
                      progres
                    </li>
                  </ul>
                </Tab>
                <Tab eventKey="who" title="Who is This Course For">
                  <ul className="text-secondary">
                    <li>Suitable for all ages - from teens onwards (not for young kids)</li>
                    <li> Perfect for people who want to be able to just sit down at a piano and just amaze everyone.</li>
                  </ul>
                </Tab>
              </Tabs>
            </div>
          </div>

          <div className="col-lg-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/dev-empty/image/upload/v1661246066/r56386ipf0e55vcjtg3d.jpg"
              />
              <Card.Body>
                <Card.Title>$ {state.price}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Category</ListGroup.Item>
                <ListGroup.Item>Duration</ListGroup.Item>
                <ListGroup.Item>Instructor</ListGroup.Item>
                <ListGroup.Item>Enrolled</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">
                  <button class="btn btn-primary buy col-12">Enroll Now</button>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
