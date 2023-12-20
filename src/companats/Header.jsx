import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

function Header({ setIsLoggedIn, isLoggedIn }) {
  const navigate = useNavigate();
  const gradientBackground = {
    background: "linear-gradient(to right, #313131, #f6ecec",
    padding: "15px",
  };

  const brand = {
    background: "linear-gradient(to right, #ead7d7, #a47c7c)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "inline-block",
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleLogin = () => {
    // Add your login logic here

    // Navigate to the user's profile or any other page after login
    navigate("/login");
  };

  return (
    <Navbar style={gradientBackground} expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/" style={brand}>
        <i className="fa fa-car me-3" style={brand}></i>My Garage
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between"
      >
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/Home">
            Home
          </Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/Mypage">
              Garage Mechanical
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Mypage">
              Body Cars
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/puncture">
              puncture
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/GarageElectrical">
              GarageElectrical
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} to="/Contact">
            Contact
          </Nav.Link>
        </Nav>

        <Form className="d-flex">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="dark">
            <CiSearch />
          </Button>
        </Form>{" "}


        {isLoggedIn ? (
          <Button variant="text-dark" onClick={handleLogout}>{" "}

            Logout
          </Button>
        ) : (
          <Nav.Link className="text-dark" onClick={handleLogin}>{" "}

            <IoMdPerson />
            Login
          </Nav.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
