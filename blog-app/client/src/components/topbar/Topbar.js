import "./topbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { logout } from "../../context/authActions";
const Topbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link to="/main/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user?.profilePict ? (
          <img
            className="topImg"
            src="https://i.dailymail.co.uk/1s/2019/01/07/10/8218450-6564651-image-m-33_1546856935221.jpg"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
