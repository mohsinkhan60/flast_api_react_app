import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import SupplierRow from "./SupplierRow";

const SupplierTable = () => {
  const [supplier, setSupplier] = useState({ data: [] });
  // console.log(supplier);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/supplier")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        setSupplier({ data: [...result.data] });
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
          <th>Name</th>
          <th>Company</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* {supplier.data &&
          supplier.data.map((suppply) => (
            <tr key={suppply.id}>
              <td>{suppply.id}</td>
              <td>{suppply.name}</td>
              <td>{suppply.company}</td>
              <td>{suppply.email}</td>
              <td>{suppply.phone}</td>
            </tr>
          ))} */}
        {supplier.data.map((suppply) => (
          <SupplierRow
            id={suppply.id}
            name={suppply.name}
            company={suppply.company}
            email={suppply.email}
            phone={suppply.phone}
            key={suppply.id}
            // handleDelete={handleDelete}
            // handleUpdate={handleUpdate}
            // handleSupplier={() => navigate("/supplier")}
          />
        ))}
      </tbody>
    </Table>
  );
};
export default SupplierTable;
