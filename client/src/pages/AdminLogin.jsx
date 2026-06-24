import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({
              ...formData,
              username: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
