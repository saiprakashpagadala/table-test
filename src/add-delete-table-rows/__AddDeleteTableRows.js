import { useState } from "react";
import TableRows from "./__TableRows";
const data = {
  majorPARVillages: [
    {
      name: "sai",
      client: "siva",
      reason: "N/A",
    },
  ],
};

function AddDeleteTableRows() {
  const [rowsData, setRowsData] = useState(data.majorPARVillages);
  console.log(rowsData);

  const addTableRows = () => {
    const rowsInput = {
      name: "",
      client: "",
      reason: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Client</th>
                <th>Reason</th>
                <th>
                  <button
                    className="btn btn-outline-success"
                    onClick={addTableRows}
                  >
                    +
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRows
                rowsData={rowsData}
                deleteTableRows={deleteTableRows}
                handleChange={handleChange}
              />
            </tbody>
          </table>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}
export default AddDeleteTableRows;
