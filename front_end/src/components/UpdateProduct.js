import { useContext } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { UpdateContext } from "../updateProductContext";

const UpdateProduct = () => {
  const [updateProductInfo, setUpdateProductInfo] = useContext(UpdateContext);

  const updateForm = (e) => {
    setUpdateProductInfo({
      ...updateProductInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group controlId="product_name">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="product_name"
              onChange={updateForm}
              value={updateProductInfo.product_name}
              placeholder="Product Name"
            />
          </Form.Group>

          <Form.Group controlId="quantity_in_stock">
            <Form.Label>Quantity In Stock</Form.Label>
            <Form.Control
              type="number"
              name="quantity_in_stock"
              onChange={updateForm}
              value={updateProductInfo.quantity_in_stock}
              placeholder="Quantity In Stock"
            />
          </Form.Group>

          <Form.Group controlId="quantity_sold">
            <Form.Label>Quantity Sold</Form.Label>
            <Form.Control
              type="number"
              name="quantity_sold"
              onChange={updateForm}
              value={updateProductInfo.quantity_sold}
              placeholder="Quantity Sold"
            />
          </Form.Group>

          <Form.Group controlId="unit_price">
            <Form.Label>Unit Price</Form.Label>
            <Form.Control
              type="number"
              name="unit_price"
              onChange={updateForm}
              value={updateProductInfo.unit_price}
              placeholder="Unit Price"
            />
          </Form.Group>

          <Form.Group controlId="revenue">
            <Form.Label>Revenue</Form.Label>
            <Form.Control
              type="number"
              name="revenue"
              onChange={updateForm}
              value={updateProductInfo.revenue}
              placeholder="Revenue"
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
export default UpdateProduct;
