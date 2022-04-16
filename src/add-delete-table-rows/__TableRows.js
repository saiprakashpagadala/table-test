function TableRows({ rowsData, deleteTableRows, handleChange }) {
  return rowsData.map((data, index) => {
    const { name, client, reason } = data;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            value={name}
            onChange={(evnt) => handleChange(index, evnt)}
            name="name"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={client}
            onChange={(evnt) => handleChange(index, evnt)}
            name="client"
            className="form-control"
          />{" "}
        </td>
        <td>
          <input
            type="text"
            value={reason}
            onChange={(evnt) => handleChange(index, evnt)}
            name="reason"
            className="form-control"
          />{" "}
        </td>
        <td>
          <button
            className="btn btn-outline-danger"
            onClick={() => deleteTableRows(index)}
          >
            x
          </button>
        </td>
      </tr>
    );
  });
}

export default TableRows;
