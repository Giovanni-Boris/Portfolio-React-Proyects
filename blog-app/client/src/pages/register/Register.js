import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userRequest } from "../../requestMethods";

const initialState = {
  email: "",
  username: "",
  password: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    let { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(form);
      const res = await userRequest.post("auth/register", form);
      res.data && navigate("/login");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          name="username"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email..."
          name="email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          name="password"
          onChange={handleChange}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "#f00", marginTop: "10px" }}>
          Something went wrong
        </span>
      )}
    </div>
  );
};

export default Register;
