import { useContext, useState } from "react";
import {
  Badge,
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContext";

const NavBar = () => {
   const [products, setProducts] = useContext(ProductContext)
   const [search, setSearch] = useState("");
  //  console.log(search)
   const updateSearch = (e) => {
    setSearch(e.target.value);
    
   }
   const filerProduct = (e) => {
    e.preventDefault();
    const product = products.data.filter((product) => product.name.toLowerCase() === search.toLowerCase());
    setProducts({ data: [...product] });
   }
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Inventory Management App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Badge bg="primary" className="mt-2">
              Products In Stock {products.data.length}
            </Badge>
          </Nav>

          <Form onSubmit={filerProduct} className="d-flex align-items-center">
            <Link
              to="/addproduct"
              className="btn btn-primary btn-sm me-3 w-100"
            >
              Add Product
            </Link>
            <FormControl
              type="search"
              value={search}
              onChange={updateSearch}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button type="submit" variant="outline-primary">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
