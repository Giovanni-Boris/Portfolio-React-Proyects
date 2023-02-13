import "./navbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">borisadmin</span>
        </div>
        <div className="navbarRight">
          <div className="navbarIconContainer">
            <NotificationsNoneIcon />
            <span className="navIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <LanguageIcon />
            <span className="navIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <SettingsIcon />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="navAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
