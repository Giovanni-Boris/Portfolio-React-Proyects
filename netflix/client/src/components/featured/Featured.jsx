import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";
const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await userRequest.get(`movies/random?type=${type}`);
        console.log(res.data);
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
  /*
  src="https://cdn.traileraddict.com/content/warner-bros-pictures/it-2017-poster-2.jpg"
          src="https://i.pinimg.com/originals/de/43/bc/de43bc6e33d4b04f98be83028f621a06.jpg"

*/
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgSm} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Play</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
