import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Jumbotron>
      <h1>Not Found!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content
        or information.
      </p>
      <p>
        <Link href="/" className="btn btn-primary">
          Go back to home
        </Link>
      </p>
    </Jumbotron>
  );
};

export default NotFound;