import "./write.css";
import { useState, useContext } from "react";
import { userRequest } from "../../requestMethods";
import { AuthContext } from "../../context/AuthContext";
const initialState = {
  title: "",
  desc: "",
};

const Write = () => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      ...form,
      username: user.username,
    };
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://i.dailymail.co.uk/1s/2019/01/07/10/8218450-6564651-image-m-33_1546856935221.jpg"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            name="file"
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            name="title"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            name="desc"
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Public
        </button>
      </form>
    </div>
  );
};

export default Write;
