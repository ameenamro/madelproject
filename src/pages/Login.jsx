import React, { useState, useEffect } from "react";
import { Form, Button, Tab, Tabs } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../companatscss/Login.css";
const Login = ({ setIsLoggedIn, isLoggedIn }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    handleLoginCheck();
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const isEmailRegistered = user.some((u) => u.Email === registerEmail);

      if (isEmailRegistered) {
        setError("Email is already registered");
      } else {
        const newUser = {
          Email: registerEmail,
          Password: registerPassword,
        };

        await axios.post(
          "https://65572bb0bd4bcef8b6122d2f.mockapi.io/ameen",
          newUser
        );

        setRegisterSuccess("Registration successful, you can now log in");
        setRegisterEmail("");
        setRegisterPassword("");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("An error occurred during registration");
    }
  };

  const isLoginDisabled = !loginEmail || !loginPassword;
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://65572bb0bd4bcef8b6122d2f.mockapi.io/ameen"
        );
        setUser(response.data);
        console.log("Data fetched successfully:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleLoginCheck = () => {
    let done = 0;
    try {
      user.forEach((response) => {
        if (
          (loginEmail === "admin@hotmail.com" &&
            response.Password === loginPassword) ||
          (response.Email === loginEmail && response.Password === loginPassword)
        ) {
          console.log("Login successful");
          navigate(
            loginEmail === "admin@hotmail.com" ? "/Adminpage" : "/mypage"
          );
          setIsLoggedIn(true);
          done = done + 1;
        }
      });

      if (done === 0) {
        console.log("Login failed");
        setError("Invalid username or password, or you may need to register");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login");
    }
  };

  return (
    <div className="container mt-5" style={{ background: "linear-gradient(to right, #515050,#c4c4c4, #515050)", padding: "11rem", borderRadius: "1rem" }}>
      <Tabs defaultActiveKey="login" id="login-register-tabs">
        <Tab eventKey="login" title="Login">
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicLoginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicLoginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </Form.Group>

            {error && <div className="text-danger">{error}</div>}

            <Button variant="primary" type="submit" disabled={isLoginDisabled}>
              Login
            </Button>
          </Form>
        </Tab>

        <Tab eventKey="register" title="Register">
          <Form onSubmit={handleRegister}>
            <Form.Group controlId="formBasicRegisterEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicRegisterPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
            </Form.Group>
            {error && <div className="text-danger">{error}</div>}
            {registerSuccess && (
              <div className="text-success">{registerSuccess}</div>
            )}
            <Button variant="primary" type="submit" disabled={isLoginDisabled}>
              Register
            </Button>
          </Form>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Login;
