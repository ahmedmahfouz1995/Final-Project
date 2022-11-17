import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Cards({ cardCom }) {
//   const { img, caption, title, salary } = cardCom;
console.log({cardCom});
console.log("asx");
  return (
    <div className="col-md-3">
      <Card style={{ width: "18rem" }} className="text-center outline-none">
        {/* <Card.Img variant="top" src={img} /> */}
        <Card.Body>
          {/* <Card.Title>{cardCom.title}</Card.Title> */}
          <Card.Text>{cardCom.phone}</Card.Text>
          <Card.Text>{cardCom.gender}$</Card.Text>
          <Button
            className="w-100 border-y-4 border-indigo-600  "
            variant="danger"
          >
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
