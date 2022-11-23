import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Cards({ cardCom }) {
  const { img, caption, title, salary } = cardCom;

  return (
    <div className="col-md-3">
      <Card style={{ width: "18rem" }} className="text-center outline-none">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{caption}</Card.Text>
          <Card.Text>{salary}$</Card.Text>
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
