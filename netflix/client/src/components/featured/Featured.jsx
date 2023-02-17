import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
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
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="info">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.infobae.com%2Famerica%2Fperu%2F2022%2F09%2F15%2Fcoldplay-los-10-mejores-momentos-que-dejaron-los-dos-conciertos-de-la-banda-en-lima%2F&psig=AOvVaw0C8_zdCxM0f4NTXtl8_qQ1&ust=1676749208307000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiHzNunnf0CFQAAAAAdAAAAABAD"
          alt=""
        />
        <span className="desc">Lorem</span>
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
