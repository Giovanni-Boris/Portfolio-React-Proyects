import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleClick = () => {
    //
    login(dispatch, form);
    navigate("/dashboard");
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        name="username"
        type="text"
        placeholder="the username is admin"
        onChange={handleChange}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        name="password"
        type="password"
        placeholder="the password is 123456"
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        style={{
          padding: 10,
          width: 100,
          backgroundColor: "teal",
          color: "#fff",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
