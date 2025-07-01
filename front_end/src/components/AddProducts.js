import { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

const AddProducts = () => {
  const [productInfo, setProductInfo] = useState({
    ProductName: "",
    QuantityInStock: "",
    QuantitySold: "",
    UnitPrice: "",
    Revenue: "",
    Supplier: "",
  });

  const updateForm = (e) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  };

  const postData = async (e) => {
    e.preventDefault();
    console.log(productInfo);

    const url = "http://localhost:8000/product/" + productInfo["Supplier"];

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: productInfo["ProductName"],
        quantity_in_stock: productInfo["QuantityInStock"],
        quantity_sold: productInfo["QuantitySold"],
        unit_price: productInfo["UnitPrice"],
        revenue: productInfo["Revenue"],
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert("Product added successfully");
    } else {
      alert("Failed to add product");
    }

    setProductInfo({
      ProductName: "",
      QuantityInStock: "",
      QuantitySold: "",
      UnitPrice: "",
      Revenue: "",
      Supplier: "",
    });
  };

  return (
    <Container className="mt-4">
      <Card className="shadow-sm">
        <Card.Body>
          <h4 className="mb-4 text-center">Add New Product</h4>
          <Form onSubmit={postData}>
            <Form.Group controlId="ProductName" className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="ProductName"
                value={productInfo.ProductName}
                onChange={updateForm}
                placeholder="Enter product name"
              />
            </Form.Group>

            <Form.Group controlId="QuantityInStock" className="mb-3">
              <Form.Label>Quantity In Stock</Form.Label>
              <Form.Control
                type="number"
                name="QuantityInStock"
                value={productInfo.QuantityInStock}
                onChange={updateForm}
                placeholder="Enter quantity in stock"
              />
            </Form.Group>

            <Form.Group controlId="QuantitySold" className="mb-3">
              <Form.Label>Quantity Sold</Form.Label>
              <Form.Control
                type="number"
                name="QuantitySold"
                value={productInfo.QuantitySold}
                onChange={updateForm}
                placeholder="Enter quantity sold"
              />
            </Form.Group>

            <Form.Group controlId="UnitPrice" className="mb-3">
              <Form.Label>Unit Price</Form.Label>
              <Form.Control
                type="number"
                name="UnitPrice"
                value={productInfo.UnitPrice}
                onChange={updateForm}
                placeholder="Enter unit price"
              />
            </Form.Group>

            <Form.Group controlId="Revenue" className="mb-3">
              <Form.Label>Revenue</Form.Label>
              <Form.Control
                type="number"
                name="Revenue"
                value={productInfo.Revenue}
                onChange={updateForm}
                placeholder="Enter revenue"
              />
            </Form.Group>

            <Form.Group controlId="Supplier" className="mb-4">
              <Form.Label>Supplier ID</Form.Label>
              <Form.Control
                type="number"
                name="Supplier"
                value={productInfo.Supplier}
                onChange={updateForm}
                placeholder="Enter supplier ID"
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

export default AddProducts;
