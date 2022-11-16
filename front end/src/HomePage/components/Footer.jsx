import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logoE.png";
export default function Footer() {
  return (
    <>
      <section className="footerSection primary-color py-5">
        <div className="container">
          <div className="row">
            <div className="col col-md-3 text-center flex-column justify-center ">
              <img className="h-30 " src={logo} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur illum dignissimos distinctio expedita accusamus
                voluptate!
              </p>
            </div>
            <div className="col col-md-3 text-center">
              <h1>Quik Link</h1>
              <Link className="text-decoration-none d-block" href="">
                Cources
              </Link>
              <Link className="text-decoration-none d-block" href="">
                About Us
              </Link>
            </div>
            <div className="col col-md-3 text-center">
              <h1>Helper Center</h1>
              <Link className="text-decoration-none d-block" href="">
                Support
              </Link>
              <Link className="text-decoration-none d-block" href="">
                Get Help{" "}
              </Link>
              <Link className="text-decoration-none d-block" href="">
                Privacy
              </Link>
            </div>
            <div className="col col-md-3 text-center">
              <h1>Contact Info</h1>
              <p>Call Us:111-25520-2044-5444-111</p>
              <p>Address +7011 Vermont Ave ,Los Angeles CA 90044</p>
              <p>Mail Us :hello@online.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
