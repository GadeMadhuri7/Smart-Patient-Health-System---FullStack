import { useState } from "react";
import { getRecords, deleteRecord, updateRecord } from "../services/api";
import CommonLayout from "../components/CommonLayout";

function ViewRecords() {
  const [records, setRecords] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [searchText, setSearchText] = useState("");
  const [editRecord, setEditRecord] = useState(null);

  const handleGetRecords = async () => {
    try {
      const res = await getRecords(searchId);
      setRecords(res.data);
    } catch {
      alert("Error fetching records");
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    await deleteRecord(id);
    setRecords(records.filter((r) => r.id !== id));
  };

  // EDIT
  const handleEdit = (record) => {
    setEditRecord(record);
  };

  // UPDATE
  const handleUpdate = async () => {
    await updateRecord(editRecord.id, editRecord);

    alert("Updated Successfully");

    setRecords(
      records.map((r) =>
        r.id === editRecord.id ? editRecord : r
      )
    );

    setEditRecord(null);
  };

  return (
    <CommonLayout>
      {(cardStyle, inputStyle, buttonStyle) => (
        <div style={cardStyle}>
          <h3>View Records</h3>

          <input
            style={inputStyle}
            placeholder="Enter Patient ID"
            onChange={(e) => setSearchId(e.target.value)}
          />

          <input
            style={inputStyle}
            placeholder="Search by disease"
            onChange={(e) => setSearchText(e.target.value)}
          />

          {/* Edit Section */}
          {editRecord && (
            <div style={{ marginBottom: "20px" }}>
              <h3>Edit Record</h3>

              <input
                value={editRecord.disease}
                onChange={(e) =>
                  setEditRecord({
                    ...editRecord,
                    disease: e.target.value,
                  })
                }
              />

              <input
                value={editRecord.prescription}
                onChange={(e) =>
                  setEditRecord({
                    ...editRecord,
                    prescription: e.target.value,
                  })
                }
              />

              <button onClick={handleUpdate}>Update</button>
            </div>
          )}

          <button style={buttonStyle} onClick={handleGetRecords}>
            Get Records
          </button>

          <ul>
            {records
              .filter((r) =>
                r.disease
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              )
              .map((r) => (
                <li key={r.id}>
                  {r.disease} - {r.prescription} ({r.date})

                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px",
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDelete(r.id)}
                  >
                    Delete
                  </button>

                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px",
                      background: "orange",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleEdit(r)}
                  >
                    Edit
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </CommonLayout>
  );
}

export default ViewRecords;