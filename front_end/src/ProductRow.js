const ProductRow = ({ id, name, quantity_in_stock, quantity_sold, unit_price, revenue }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{quantity_in_stock}</td>
      <td>{quantity_sold}</td>
      <td>{unit_price}</td>
      <td>{revenue}</td>
      <td>
        <button className="btn btn-outline-info btn-sm me-2">Update</button>
        <button className="btn btn-outline-success btn-sm me-2">Supplier</button>
        <button className="btn btn-outline-danger btn-sm">Delete</button>
      </td>
    </tr>
  );
};

export default ProductRow;
