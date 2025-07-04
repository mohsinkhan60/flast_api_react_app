import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProducts from "./components/AddProducts";
import AddSupplier from "./components/AddSupplier";
import NavBar from "./components/NavBar";
import ProductsTable from "./components/ProductsTable";
import SupplierTable from "./components/SupplierTable";
import UpdateProduct from "./components/UpdateProduct";
import UpdateSupplier from "./components/UpdateSupplier";
import { ProductProvider } from "./ProductContext";
import UpdateProductContextProvider from "./updateProductContext";
import UpdateSupplierContextProvider from "./updateSupplierContext";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <NavBar />
        <Container className="mt-4 mb-4">
          <Row className="justify-content-center">
            <Col xs={12}>
              <UpdateProductContextProvider>
                <UpdateSupplierContextProvider>
                  <Routes>
                    <Route exact path="/" element={<ProductsTable />} />
                    <Route exact path="/supplier" element={<SupplierTable />} />
                    <Route
                      exact
                      path="/updateproduct/:id"
                      element={<UpdateProduct />}
                    />
                    <Route
                      exact
                      path="/updatesupplier/:id"
                      element={<UpdateSupplier />}
                    />
                    <Route exact path="/addproduct" element={<AddProducts />} />
                    <Route exact path="/addsupplier" element={<AddSupplier />} />
                  </Routes>
                </UpdateSupplierContextProvider>
              </UpdateProductContextProvider>
            </Col>
          </Row>
        </Container>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
