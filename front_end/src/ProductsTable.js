/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { ProductContext } from "./ProductContext";

const ProductsTable = () => {
   const [products, setProducts] = useContext(ProductContext)
   useEffect(() => {
      fetch('http://127.0.0.1:8000/product')
      .then(res => {
         return res.json();
      }).then(
         result => {
            console.log(result)
            setProducts({"data" : [...result.data]})
         }
      )
   },[])
  return (
    <Table className="item-center flex justify-content-center" striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Product Name</th>
          <th>Quantity In Stock</th>
          <th>Quantity Sold</th>
          <th>Unit Price</th>
          <th>Revenue</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{/* Table rows will go here dynamically */}</tbody>
    </Table>
  );
};
export default ProductsTable;
