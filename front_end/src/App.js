import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { ProductProvider } from "./ProductContext";
import ProductsTable from "./ProductsTable";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <NavBar />
        <Container className="mt-4 mb-4">
          <Row className="justify-content-center">
            <Col xs={12} sm={0}>
              <ProductsTable />
            </Col>
          </Row>
        </Container>
        <Routes>{/* Your <Route> components go here */}</Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
