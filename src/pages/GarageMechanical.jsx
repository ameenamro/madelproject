import React, { useContext,useState } from "react";
import { UserContext } from "../database/Database";
import "../companatscss/Home.css"; // Import your CSS file for styling
import { Card, Col, Row } from "react-bootstrap"; // Import Col and Row for grid layout
import { Link, useNavigate } from "react-router-dom";

function GarageMechanical({ Aboutgarage,setAboutgarage }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  

  const size = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Adjust the minmax value as needed
    gridAutoRows: "350px", // Set a fixed height for each row, adjust as needed
    alignItems: "center",
    textAlign: "center",
  };
  const cardImageStyle = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  };
  const rowStyle = {
    marginLeft: "60px",
  };

  const openGarage = (userdata) => {
    navigate("/ProductDisplay",{ state: { userdata } }  );
  };

  return (
    <div
      className="home-container "
      style={{
        background: "linear-gradient(to right, #313131, #f6ecec)",
        marginTop: "calc(5vh + 1rem)", // Add space for the navbar (adjust the value as needed)
      }}
    >
      <Row className="justify-content-md-center" style={rowStyle}>
        {user &&
          user.map((userData) => (
            <Col key={userData.id} md={4} className="mb-3" style={size}>
              <Card
                onClick={() => openGarage(userData)}
                className="custom-card"
                style={{
                  background: "linear-gradient(to right, #dddddd, #cacaca)",
                  height: "80%",
                  width: "70%",
                }}
              >
                <Card.Img
                  variant="top"
                  src={userData.Image}
                  alt={`Image of ${userData.name}`}
                  style={cardImageStyle}
                  className="rounded-top"
                />
                <Card.Body>
                  <Card.Title>{userData.name}</Card.Title>
                  <Card.Text>{userData.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default GarageMechanical;
