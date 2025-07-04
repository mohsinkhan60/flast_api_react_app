const SupplierRow = ({ id, name, company, email, phone, handleUpdate }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{company}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>

        <button
          onClick={() => handleUpdate(id)}
          className="btn btn-outline-info btn-sm me-2"
        >
          Update
        </button>
        <button
          // onClick={() => handleSupplier()}
          className="btn btn-outline-success btn-sm me-2"
        >
          Sent Email
        </button>
        <button
          // onClick={() => handleDelete(id)}
          className="btn btn-outline-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SupplierRow;
