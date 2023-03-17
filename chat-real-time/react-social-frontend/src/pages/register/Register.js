import "./register.css";
import { useState } from "react";
import { publicRequest } from "../../requestMethods";
import { useNavigate, Link } from "react-router-dom";

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordAgain: "",
};
const Register = () => {
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.passwordAgain) {
      alert("Passwords don't match!");
    } else {
      const { passwordAgain, ...user } = form;
      try {
        await publicRequest.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">borisocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on borisocial.
          </span>
        </div>
        <form className="loginRight" onSubmit={handleSubmit}>
          <div className="loginBox">
            <input
              placeholder="Username"
              required
              className="loginInput"
              name="username"
              onChange={handleChange}
            />
            <input
              placeholder="Email"
              required
              className="loginInput"
              name="email"
              onChange={handleChange}
              type="email"
            />
            <input
              placeholder="Password"
              required
              className="loginInput"
              name="password"
              onChange={handleChange}
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              className="loginInput"
              required
              name="passwordAgain"
              onChange={handleChange}
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to="/login">
              <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
