import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Membership = () => {
  return (
    <div class="container-fluid p-5">
      <div class="mhead  pb-3">
        <h1>Membership</h1>
      </div>
      <CardGroup className="text-center">
        <Card>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Card.Body>
            <Card.Title>Single</Card.Title>
            <Card.Text>Package for health passionate individuals.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Card.Body>
            <Card.Title>Couple</Card.Title>
            <Card.Text>Enjoy workout with your loved ones.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Card.Body>
            <Card.Title>Family</Card.Title>
            <Card.Text>Fantastic for family fitness.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Card.Body>
            <Card.Title>Group</Card.Title>
            <Card.Text>Friend's forever-workout together.</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Membership;
