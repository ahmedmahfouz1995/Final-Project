import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

export default function Cards({ cardCom }) {
    // console.log({cardCom});
  const { teacher,endDate, startDate, title, Image_url,price ,_id} = cardCom;
  console.log({title})
  return (
<div className="col-md-4 col-sm-6 py-2 my-5">
              <Card className="courseCard">
                <Card.Img variant="top" src={Image_url} />
                <Card.Body>
                  <Card.Title className="fw-bold">{title}</Card.Title>
                  <Card.Text>
                Teacher is {teacher.name}
                </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">
                    Start: {startDate} . End: {endDate}
                  </Card.Subtitle>
             
                  <NavLink to={`course-details`} state={cardCom} variant="btn btn-outline-primary" className="mt-3">
                    Details
                  </NavLink>
                  <p className="coursePrice py-2 px-3 text-light">{price} $</p>
                </Card.Body>
              </Card>
            </div>
  );
}
