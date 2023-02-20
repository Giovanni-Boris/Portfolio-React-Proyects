import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useLocation, Link } from "react-router-dom";
const Watch = () => {
  const location = useLocation();
  const movie = location.state;
  return (
    <div className="watch">
      <Link to="/dashboard/">
        <div className="back">
          <ArrowBackOutlinedIcon />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
};

export default Watch;
