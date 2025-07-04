import { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddSupplier = () => {
  const navigate = useNavigate();
  const [supplierInfo, setSupplierInfo] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const updateForm = (e) => {
    setSupplierInfo({ ...supplierInfo, [e.target.name]: e.target.value });
  };

  const postData = async (e) => {
    e.preventDefault();
    console.log(supplierInfo);

    const url = "http://localhost:8000/supplier";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(supplierInfo),
    });

    const data = await response.json();

    if (data.data) {
      alert("Supplier added successfully");
    } else {
      alert("Failed to add supplier");
    }

    setSupplierInfo({
      name: "",
      company: "",
      email: "",
      phone: "",
    });
    navigate("/supplier");
  };

  return (
    <Container className="mt-4">
      <Card className="shadow-sm">
        <Card.Body>
          <h4 className="mb-4 text-center">Add New Supplier</h4>
          <Form onSubmit={postData}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={supplierInfo.name}
                onChange={updateForm}
                placeholder="Enter supplier name"
                required
              />
            </Form.Group>

            <Form.Group controlId="company" className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={supplierInfo.company}
                onChange={updateForm}
                placeholder="Enter company"
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={supplierInfo.email}
                onChange={updateForm}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group controlId="phone" className="mb-3">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={supplierInfo.phone}
                onChange={updateForm}
                placeholder="Enter phone number"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddSupplier;