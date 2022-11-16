import React from "react";
import Cards from "../../components/Cards";
import course1 from "./../../assets/edu4.jpeg";


export default function Courses() {
  const cardCom = {
    img: course1,
    title: "courseOne",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, corporis.",
    salary: "9.99",
  };

  return (
    <section className="courseSection mb-5 ">
      <div className="container">
        <div className="row">
          <div className="flex justify-center items-center my-5">
            <span className="relative text-center text-lower ">
              Learn, know, Enjoy{" "}
            </span>
            <p className="absolute text-center upper-text rounded-2xl">
              Popular Courcess
            </p>
          </div>

          <Cards cardCom={cardCom} />
          <Cards cardCom={cardCom} />
          <Cards cardCom={cardCom} />
          <Cards cardCom={cardCom} />
        </div>
      </div>
    </section>
  );
}
