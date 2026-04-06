import { useState } from "react";
import { registerUser, loginUser } from "../services/api";
import CommonLayout from "../components/CommonLayout";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: ""
  });

  const handleRegister = async () => {
    await registerUser(user);
    alert("Registered");
  };

  const handleLogin = async () => {
    try {
      const res = await loginUser(user);

      // store logged-in user
      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Login Success");

      // redirect to view page
      navigate("/view");

    } catch {
      alert("Login Failed");
    }
  };

  return (
    <CommonLayout>
      {(cardStyle, inputStyle, buttonStyle) => (
        <div style={cardStyle}>
          <h3>Register / Login</h3>

          <input
            style={inputStyle}
            placeholder="Name"
            onChange={e => setUser({ ...user, name: e.target.value })}
          />

          <input
            style={inputStyle}
            placeholder="Email"
            onChange={e => setUser({ ...user, email: e.target.value })}
          />

          <input
            style={inputStyle}
            type="password"
            placeholder="Password"
            onChange={e => setUser({ ...user, password: e.target.value })}
          />

          <input
            style={inputStyle}
            placeholder="Age"
            onChange={e => setUser({ ...user, age: e.target.value })}
          />

          <input
            style={inputStyle}
            placeholder="Gender"
            onChange={e => setUser({ ...user, gender: e.target.value })}
          />

          <button style={buttonStyle} onClick={handleRegister}>
            Register
          </button>

          <button style={buttonStyle} onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </CommonLayout>
  );
}

export default Register;