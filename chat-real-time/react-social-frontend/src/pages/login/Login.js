import "./login.css";
import { useRef } from "react";
const Login = () => {
	const email = useRef();
	const password = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("clicked");
	};
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">borisocial</h3>
					<span className="loginDesc">
						Connect with friends and the world around you on
						borisocial.
					</span>
				</div>
				<div className="loginRight">
					<form className="loginBox" onSubmit={handleSubmit}>
						<input
							placeholder="Email"
							type="email"
							className="loginInput"
							ref={email}
							required
						/>
						<input
							placeholder="Password"
							type="password"
							className="loginInput"
							ref={password}
							required
							minLength={6}
						/>
						<button className="loginButton">Log In</button>
						<span className="loginForgot">Forgot Password</span>
						<button className="loginRegisterButton">
							Create a New Account
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
