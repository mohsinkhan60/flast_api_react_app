import { useContext } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UpdateSupplierContext } from "../updateSupplierContext";

const UpdateSupplier = () => {
  const [updateSupplierInfo, setUpdateSupplierInfo] = useContext(UpdateSupplierContext);
  const navigate = useNavigate();

  const updateForm = (e) => {
    setUpdateSupplierInfo({
      ...updateSupplierInfo,
      [e.target.name]: e.target.value,
    });
  };

  const postData = async (e) => {
    e.preventDefault();

    const url = "http://localhost:8000/supplier/" + updateSupplierInfo["id"];

    const response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: updateSupplierInfo["name"],
        company: updateSupplierInfo["company"],
        email: updateSupplierInfo["email"],
        phone: updateSupplierInfo["phone"],
      }),
    });

    response.json().then((resp) => {
      if (resp.status === "ok") {
        alert("Supplier updated");
      }
    });

    setUpdateSupplierInfo({
      id: "",
      name: "",
      company: "",
      email: "",
      phone: "",
    });
    navigate("/supplier");
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={postData}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={updateForm}
              value={updateSupplierInfo.name}
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group controlId="company">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              name="company"
              onChange={updateForm}
              value={updateSupplierInfo.company}
              placeholder="Company"
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={updateForm}
              value={updateSupplierInfo.email}
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              onChange={updateForm}
              value={updateSupplierInfo.phone}
              placeholder="Phone"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default UpdateSupplier;