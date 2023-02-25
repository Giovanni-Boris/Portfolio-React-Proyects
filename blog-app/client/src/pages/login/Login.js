import "./login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { login } from "../../context/apiCalls";
const initialState = {
  username: "",
  password: "",
};
const Login = () => {
  const { isFetching, dispatch } = useContext(AuthContext);
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form, dispatch);
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          name="username"
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          name="password"
          onChange={handleChange}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
