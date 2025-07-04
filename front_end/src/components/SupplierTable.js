import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import SupplierRow from "./SupplierRow";
import { UpdateSupplierContext } from "../updateSupplierContext";
import { useNavigate } from "react-router-dom";

const SupplierTable = () => {
  const [supplier, setSupplier] = useState({ data: [] });
  const [updateSupplierInfo, setUpdateSupplierInfo] = useContext(
    UpdateSupplierContext
  );
  let navigate = useNavigate();

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

  const handleUpdate = (id) => {
    const supp = supplier.data.filter((supp) => supp.id === id)[0];
    setUpdateSupplierInfo({
      id: supp.id,
      name: supp.name,
      company: supp.company,
      email: supp.email,
      phone: supp.phone,
    });
    navigate(`/updatesupplier/${id}`);
  };
  const addSupplier = () => {
    navigate("/addsupplier");
  };
  const back = () => {
    navigate("/");
  };

  const handleDelete = (id) => {
        fetch('http://127.0.0.1:8000/supplier/' + id, {
      method: "DELETE",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "Product deleted successfully") {
          const filteredProducts = supplier.data.filter(
            (product) => product.id !== id
          );
          setSupplier({ data: [...filteredProducts] });
          alert("Product deleted successfully");
        } else {
          alert("Failed to delete product");
        }
      });
  }

  const sentEmail = () => {
    navigate("/sentemail");
  }

  return (
    <div className="mt-4 container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="flex justify-content-start mb-2">
        <button onClick={back} className="btn btn-success btn-sm">
          Back To Home
        </button>
        </div>
        <div className="d-flex justify-content-end mb-2">
          <button onClick={addSupplier} className="btn btn-success btn-sm">
            Add New Supplier
          </button>
        </div>
      </div>
      <Table
        className="item-center mt-4 flex justify-content-center"
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
              sentEmail={sentEmail}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              // handleSupplier={() => navigate("/supplier")}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default SupplierTable;
