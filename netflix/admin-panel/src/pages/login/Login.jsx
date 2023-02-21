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
    console.log(form);
    login(form, dispatch);
  };
  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          className="loginInput"
          onChange={handleChange}
          name="email"
        />
        <input
          type="password"
          placeholder="password"
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
