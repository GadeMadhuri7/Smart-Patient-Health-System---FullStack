import { useState } from "react";
import { addRecord } from "../services/api";
import CommonLayout from "../components/CommonLayout";

function AddRecord() {
  const [record, setRecord] = useState({
    patientId: "",
    disease: "",
    prescription: "",
    date: ""
  });

  const handleAddRecord = async () => {
    try {
      await addRecord(record);
      alert("Record Added");
    } catch {
      alert("Error adding record");
    }
  };

  return (
    <CommonLayout>
      {(cardStyle, inputStyle, buttonStyle) => (
        <div style={cardStyle}>
          <h3>Add Medical Record</h3>

          <input style={inputStyle}
            placeholder="Patient ID"
            onChange={e => setRecord({...record, patientId:e.target.value})}
          />

          <input style={inputStyle}
            placeholder="Disease"
            onChange={e => setRecord({...record, disease:e.target.value})}
          />

          <input style={inputStyle}
            placeholder="Prescription"
            onChange={e => setRecord({...record, prescription:e.target.value})}
          />

          <input style={inputStyle}
            type="date"
            onChange={e => setRecord({...record, date:e.target.value})}
          />

          <button style={buttonStyle} onClick={handleAddRecord}>
            Add Record
          </button>
        </div>
      )}
    </CommonLayout>
  );
}

export default AddRecord;