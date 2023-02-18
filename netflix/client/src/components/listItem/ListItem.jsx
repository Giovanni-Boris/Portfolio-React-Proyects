import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { useState } from "react";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 + 25 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.ecestaticos.com/3swvlDILz_PUe9iDB6vZDlSePso=/0x61:1195x733/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F036%2F47d%2F3e1%2F03647d3e14cd1734f5871d529a6d8bd4.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpAltOutlinedIcon className="icon" />
              <ThumbDownOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>2017</span>
            </div>
            <div className="desc">Is it? </div>
            <div className="genre">Horror Drama</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
