import "./topbar.css";

const Topbar = () => {
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
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://i.dailymail.co.uk/1s/2019/01/07/10/8218450-6564651-image-m-33_1546856935221.jpg"
          alt=""
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
