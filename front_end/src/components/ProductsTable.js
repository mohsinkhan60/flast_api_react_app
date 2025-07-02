/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { ProductContext } from "../ProductContext";
import ProductRow from "./ProductRow";
import { useNavigate } from "react-router-dom";

const ProductsTable = () => {
  const [products, setProducts] = useContext(ProductContext);
  let navigate = useNavigate();
  const handleDelete = (id) => {
    fetch("http://127.0.0.1:8000/product/" + id, {
      method: "DELETE",
      headers: {
        accept: "application/json",
      },
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === "Product deleted successfully") {
          const filteredProducts = products.data.filter(product => product.id !== id);
          setProducts({ data: [...filteredProducts] });
          alert("Product deleted successfully");
        } else {
          alert("Failed to delete product");
        }
      });
  };

  const handleUpdate = (id)  => {
    navigate(`/updateproduct/${id}`);
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/product")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        setProducts({ data: [...result.data] });
      });
  }, []);
  return (
    <Table
      className="item-center flex justify-content-center"
      striped
      bordered
      hover
    >
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
      <tbody>
        {products.data.map((product) => (
          <ProductRow
            id={product.id}
            name={product.name}
            quantity_in_stock={product.quantity_in_stock}
            quantity_sold={product.quantity_sold}
            unit_price={product.unit_price}
            revenue={product.revenue}
            key={product.id}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </tbody>
    </Table>
  );
};
export default ProductsTable;
