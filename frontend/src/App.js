import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Register from "./pages/Register";
import AddRecord from "./pages/AddRecord";
import ViewRecords from "./pages/ViewRecords";
import Profile from "./pages/Profile";
function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        
        {/* Sidebar */}
        <div
          style={{
            width: "220px",
            height: "100vh",
            background: "#0d6efd",
            color: "white",
            paddingTop: "20px",
            position: "fixed",
            boxShadow: "2px 0 10px rgba(0,0,0,0.2)"
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Dashboard
          </h2>

          <div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
            
            <NavLink to="/" style={navStyle}>Home</NavLink>
            <NavLink to="/add" style={navStyle}>Add Record</NavLink>
            <NavLink to="/view" style={navStyle}>View Records</NavLink>
            <NavLink to="/profile" style={navStyle}>Profile</NavLink>

          </div>
        </div>

        {/* Content Area */}
        <div style={{ marginLeft: "220px", width: "100%" }}>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/add" element={<AddRecord />} />
            <Route path="/view" element={<ViewRecords />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

const navStyle = ({ isActive }) => ({
  color: "white",
  textDecoration: "none",
  padding: "12px",
  fontSize: "18px",
  margin: "5px 0",
  borderRadius: "8px",
  background: isActive ? "#084298" : "transparent",
  transition: "0.3s",
  cursor: "pointer"
});

export default App;