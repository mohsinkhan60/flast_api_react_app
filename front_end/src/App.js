import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { ProductProvider } from "./ProductContext";
import ProductsTable from "./ProductsTable";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ProductProvider>
          <NavBar />
          <ProductsTable />
          <Routes>{/* Your <Route> components go here */}</Routes>
        </ProductProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
