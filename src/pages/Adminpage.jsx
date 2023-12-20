import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Col, Table, Button, Form, Modal } from "react-bootstrap";

const AdminPage = () => {
  const [user, setuser] = useState([]);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    id: null,
    name: "",
    description: "",
    email: "",
    Image: "", // Added Image field
    voting:"" ,
    number:"" ,
  });

  const handleAdd = async () => {
    try {
      const newItem = {
        name: selectedItem.name,
        description: selectedItem.description,
        email: selectedItem.email,
        Image: selectedItem.Image,
        voting:selectedItem.voting ,
        number:selectedItem.number ,
      };

      const response = await axios.post(
        "https://65572bb0bd4bcef8b6122d2f.mockapi.io/GARAGEDATA",
        newItem
      );

      setData([...data, response.data]);
      setShowModal(false);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedItem = {
        name: selectedItem.name,
        description: selectedItem.description,
        email: selectedItem.email,
        Image: selectedItem.Image,
        voting:selectedItem.voting ,
        number:selectedItem.number ,
      };

      await axios.put(
        `https://65572bb0bd4bcef8b6122d2f.mockapi.io/GARAGEDATA/${selectedItem.id}`,
        updatedItem
      );

      const updatedData = data.map((item) =>
        item.id === selectedItem.id ? { ...item, ...updatedItem } : item
      );

      setData(updatedData);
      setShowModal(false);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://65572bb0bd4bcef8b6122d2f.mockapi.io/GARAGEDATA/${id}`
      );

      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem({
      id: null,
      name: "",
      description: "",
      email: "",
      Image: "",
      voting:"" ,
      number:""
    });
  };

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleShowAddModal = () => {
    setSelectedItem({
      id: null,
      name: "",
      description: "",
      email: "",
      Image: "",
     voting:"" ,
     number:""
    });
    setShowModal(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://65572bb0bd4bcef8b6122d2f.mockapi.io/GARAGEDATA"
        );
        setuser(response.data);
        setData(response.data);
        console.log("Data fetched successfully:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container fluid>
      <Col
        md={10}
        className="p-4"
        style={{
          marginTop: "calc(10vh + 2rem)",
          marginLeft: "calc(10vh + 2rem)",
        }}
      >
        <Button
          variant="success"
          onClick={handleShowAddModal}
          style={{ marginBottom: "1rem" }}
        >
          Add
        </Button>

        <Table striped bordered hover className="mx-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Email</th>
              <th>Voting</th>
              <th>Number</th>
              <th>Image</th>
              <th>Action</th>
              
            
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.email}</td>
                <td>{item.voting}</td>
                <td>{item.number}</td>
                <td>
                  <img
                    src={item.Image}
                    alt={`Image ${item.id}`}
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                </td>
                <td>
                  <Button variant="info" onClick={() => handleShowModal(item)}>
                    Edit
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Add/Update Modal */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {selectedItem.id ? "Edit Item" : "Add Item"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formItemName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={selectedItem.name}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      name: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formItemDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter description"
                  value={selectedItem.description}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formItemEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  value={selectedItem.email}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      email: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formItemImage">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image URL"
                  value={selectedItem.Image}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      Image: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group controlId="Voting">
                <Form.Label>Voting</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Voting"
                  value={selectedItem.voting}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      voting: e.target.value,
                    })
                  }
                />
              </Form.Group>


              <Form.Group controlId="Number">
                <Form.Label>Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Number"
                  value={selectedItem.number}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      number: e.target.value,
                    })
                  }
                />
              </Form.Group>






            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={selectedItem.id ? handleUpdate : handleAdd}
            >
              {selectedItem.id ? "Update" : "Add"}
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Container>
  );
};

export default AdminPage;
