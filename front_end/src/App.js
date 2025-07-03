import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { ProductProvider } from "./ProductContext";
import { Container, Row, Col } from "react-bootstrap";
import ProductsTable from "./components/ProductsTable";
import AddProducts from "./components/AddProducts";
import UpdateProduct from "./components/UpdateProduct";
import UpdateProductContextProvider from "./updateProductContext";
import SupplierTable from "./components/SupplierTable";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <NavBar />
        <Container className="mt-4 mb-4">
          <Row className="justify-content-center">
            <Col xs={12}>
              <UpdateProductContextProvider>
                <Routes>
                  <Route exact path="/" element={<ProductsTable />} />
                  <Route exact path="/supplier" element={<SupplierTable />} />
                  <Route
                    exact
                    path="/updateproduct/:id"
                    element={<UpdateProduct />}
                  />
                  <Route exact path="/addproduct" element={<AddProducts />} />
                </Routes>
              </UpdateProductContextProvider>
            </Col>
          </Row>
        </Container>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
