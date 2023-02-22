import "./register.scss";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
const initialState = {
  password: "",
  username: "",
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();

  const emailRef = useRef();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    console.log(email, form);
    try {
      await publicRequest.post("auth/register", { email, ...form });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={handleChange}
            />
            <input
              name="password"
              type="password"
              placeholder="password"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="registerButton"
              onClick={handleFinish}
            >
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
