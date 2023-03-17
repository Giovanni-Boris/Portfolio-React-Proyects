import "./login.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";
const initialState = {
  password: "",
  email: "",
};
const Login = () => {
  const [form, setForm] = useState(initialState);
  const { isFetching, dispatch } = useContext(AuthContext);
  console.log("isFetching ", isFetching);
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
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Use admin@gmail.com"
          className="loginInput"
          onChange={handleChange}
          name="email"
        />
        <input
          type="password"
          placeholder="Use this password 123456"
          className="loginInput"
          onChange={handleChange}
          name="password"
        />
        <button type="submit" className="loginButton" disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
