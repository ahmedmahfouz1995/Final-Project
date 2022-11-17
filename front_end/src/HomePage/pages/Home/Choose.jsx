import React from "react";
import emdy1 from "../../assets/edmy1.png";
import emdy2 from "../../assets/edmy2.png";
import emdy3 from "../../assets/edmy3.png";
import emdy4 from "../../assets/edmy4.png";
export default function Choose() {
  return (
    <div className="primary-color ChooseSection my-5">
      <div className="container">
        <div className="row">
          <h1 className="text-center mt-5 font-bold">
            Why You Should Choose Our Site
          </h1>

          <div className="emdyCard col-sm-3">
            <img src={emdy1} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              maxime doloribus nesciunt quibusdam hic asperiores sint minus sed
              enim tenetur!
            </p>
          </div>
          <div className="emdyCard col-sm-3">
            <img src={emdy2} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              magni laborum fugit modi obcaecati, et maxime quaerat iure unde
              tempora?
            </p>
          </div>
          <div className=" emdyCard col-sm-3">
            <img src={emdy3} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              optio reiciendis pariatur officia magni itaque fugit voluptatum,
              aspernatur voluptates excepturi.
            </p>
          </div>
          <div className="emdyCard col-sm-3">
            <img src={emdy4} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              repudiandae eius, tempore eveniet ipsam sed quaerat beatae. Natus,
              labore libero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
