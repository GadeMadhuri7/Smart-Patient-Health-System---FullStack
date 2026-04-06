import bgImage from "../images/background.jpg";

const cardStyle = {
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(10px)",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  width: "320px",
  marginBottom: "20px"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  border: "none",
  borderRadius: "8px",
  background: "#007bff",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};

function CommonLayout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "20px",
          textShadow: "2px 2px 5px black"
        }}
      >
         Smart Patient Health System
      </h1>

      {children(cardStyle, inputStyle, buttonStyle)}
    </div>
  );
}

export default CommonLayout;