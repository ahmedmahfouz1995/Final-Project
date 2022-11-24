import React from "react";
import { Card } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

export default function TeacherStudents() {
  return (
    <div className="myStudents vh-100 py-5 bg-light">
      <h2 className="text-center mb-5">Students</h2>
      <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            />
            <Card.Body>
              <Card.Title>Wade Warren</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="row">
                <div className="col-md-6">Enrolled</div>
                <div className="col-md-6">4/10/2022</div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            />
            <Card.Body>
              <Card.Title>Wade Warren</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="row">
                <div className="col-md-6">Enrolled</div>
                <div className="col-md-6">4/10/2022</div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            />
            <Card.Body>
              <Card.Title>Wade Warren</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="row">
                <div className="col-md-6">Enrolled</div>
                <div className="col-md-6">4/10/2022</div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            />
            <Card.Body>
              <Card.Title>Wade Warren</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="row">
                <div className="col-md-6">Enrolled</div>
                <div className="col-md-6">4/10/2022</div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      </div>
    </div>
  );
}
