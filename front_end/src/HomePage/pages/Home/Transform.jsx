import React from "react";
import banner from "./../../assets/transform-img.png";


export default function Transform() {
  return (
    <div className="TransformSection my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 flex flex-col justify-center items-center ">
            <div className="TransformLeft">
              <h1 className="font-bold">
                Enroll Know to our Courcess and learn More{" "}
              </h1>
              <p className="secondary-color">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi soluta animi fugiat unde, atque totam.
              </p>
            </div>

            <div className="TransformLeftBox">
              <h1 className="mb-6">
                Transform Your Life Through Online Education
              </h1>
              <button className="TransformBtn btn btn-outline-danger px-4 py-2">
                {" "}
                Courcess
              </button>
            </div>
          </div>
          <div className="col-md-6 flex  justify-center items-center">
            <img className="relative z-50" src={banner} alt="" />
            <div className="bg-red-400 imgBackground opacity-80"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
