import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import "../companatscss/Home.css"; // Import your CSS file for styling

function Home() {
  const [photoURLs, setPhotoURLs] = useState([
    "file:///C:/Users/Hitech/Downloads/car-repair-html-template-freewebsitecode/car-repair-html-template/img/carousel-bg-1.jpg",
    "file:///C:/Users/Hitech/Downloads/car-repair-html-template-freewebsitecode/car-repair-html-template/img/carousel-bg-1.jpg",
  ]);

  const changePhotos = () => {
    const newPhotoURLs = [
      "file:///C:/Users/Hitech/Downloads/car-repair-html-template-freewebsitecode/car-repair-html-template/img/carousel-bg-1.jpg",
      "file:///C:/Users/Hitech/Downloads/car-repair-html-template-freewebsitecode/car-repair-html-template/img/carousel-bg-1.jpg",
    ];

    setPhotoURLs(newPhotoURLs);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      changePhotos();
    }, 5000); // Change photos every 5000 milliseconds (5 seconds)

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-container" style={{ marginTop: "calc(7vh + 1rem)" }}>
      <Carousel >
        {photoURLs.map((photo, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={photo}
              alt={`Photo ${index + 1}`}
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                maxHeight: "100%", // Adjust the maximum height as needed
                maxWidth: "100%",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="mt-4">
        <Row className="mt-4">
          <Col className="service-col">
            <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>

            <h3>Quality Servicing</h3>
            <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
            <Button variant="primary">Read More</Button>
          </Col>
        </Row>

        {/* Expert Workers Section */}
        <Row className="mt-4">
          <Col className="service-col">
            <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
            <h3>Expert Workers</h3>
            <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
            <Button variant="primary">Read More</Button>
          </Col>
        </Row>

        {/* Modern Equipment Section */}
        <Row className="mt-4">
          <Col className="service-col">
            <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>

            <h3>Modern Equipment</h3>
            <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
            <Button variant="primary">Read More</Button>
          </Col>
        </Row>

        {/* About Us Section */}
    
      </Container>{""}
      <Row className="mt-4">
          <Col>
            <h2>About Us</h2>
            <img
              src="../src/companatscss/img/about-us-photo.jpg" // Replace with your actual photo URL
              alt="About Us"
              style={{ maxWidth: "100%", borderRadius: "10px"  }}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
    </div>
  );
}

export default Home;
