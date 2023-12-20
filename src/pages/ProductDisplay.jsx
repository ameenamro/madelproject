// ProductDisplay.js

import { Container, Row, Col } from "react-bootstrap"; // Assuming you're using Bootstrap for styling
import { useLocation } from "react-router-dom";
import React, { useContext,useState } from "react";

const ProductDisplay = (Aboutgarage, setAboutgarage) => {
  const location = useLocation();
  const userData = location.state?.userData || {};
  return (

    <div   style={{ marginTop: "calc(5vh + 2rem)" ,padding:"200px", background: "linear-gradient(to right, #313131, #f6ecec",}}
   >
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <img
            src={""}
            alt={console.log(userData.name)}
            className="img-fluid"
            style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
          />
        </Col>
        <Col md={6}>
          <h2>dsadsadsa</h2>
          <p>dsadsasda</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ProductDisplay;
