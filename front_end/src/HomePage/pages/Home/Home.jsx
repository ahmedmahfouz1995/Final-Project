import React from "react";
import banner from "./../../assets/banner-img-1.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Courses from "./Courses";
import Transform from "./Transform";
import Students from "./Students ";
import BecomeAnInstructor from "./BecomeAnInstructor";
import Choose from "./Choose";
import { useSelector } from "react-redux";

export default function Home() {

    const { TeacherData } = useSelector((state) => state.Teachercontx);
console.log(TeacherData)

  return (
    <>
      <section className="homeSection">
        <div className="container   ">
          <div className="row">
            <div className="col-md-7 flex justify-center items-center  ">
              <img
                className="homeImg rounded-full relative z-50"
                src={banner}
                alt=""
              />
              <div className="imgBackgroundHome absolute opacity-70"></div>
            </div>
            <div className="col-md-5 flex justify-center items-center flex-col">
              <h1 className="font-bold  homeH ">
                Improve Your Online Learning Experience <br /> Better Instantly{" "}
              </h1>
              <p className="text-light font-bold">
                We have <span className="text-yellow-200"> 40k+ </span> Online
                courses & <span className="text-yellow-200"> 500k+ </span>{" "}
                Online registered student. Find your desired Courses from them.
              </p>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button
                  className="px-4 py-3 text-white"
                  variant="outline-danger"
                  id="button-addon2"
                >
                  Search Now
                </Button>
              </InputGroup>
            </div>
          </div>
        </div>
      </section>
      <Courses />
      <Transform />
      <Choose />
      <Students />
      <BecomeAnInstructor />
    </>
  );
}
