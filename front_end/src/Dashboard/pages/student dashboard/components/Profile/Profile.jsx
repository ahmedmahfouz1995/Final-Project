import React from "react";

export default function Profile() {
  return (
    <div className="container col-8 my-5">
      <h3 className="my-4">Mohamed Aglan</h3>
      <hr />
      <div className="row my-4 text-center">
        <div className="col-md-4">
          <h5 className="bg-primary text-center text-light p-2 rounded">
            Email
          </h5>
          <p className="lead">mohamedaglan177@gmail.com</p>
          <h5 className="bg-primary text-light p-2 rounded">
            Mobile
          </h5>
          <p className="lead">01144426901</p>
        </div>
        <div className="col-md-4">
          <h5 className="bg-primary text-light p-2 rounded">
            Address
          </h5>
          <p className="lead">Tanta, Egypt</p>
        </div>
        <div className="col-md-4">
          <h5 className="bg-primary text-light p-2 rounded">
            Birth Date
          </h5>
          <p className="lead">24 / 9</p>
          <h5 className="bg-primary text-light p-2 rounded">
            Gender
          </h5>
          <p className="lead">Male</p>
        </div>
      </div>
    </div>
  );
}
