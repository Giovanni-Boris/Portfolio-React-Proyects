import "./write.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { publicRequest, userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  desc: "",
  file: null,
};

const Write = () => {
  const [form, setForm] = useState(initialState);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e, file) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: file || value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      ...form,
      username: user.username,
    };
    if (form.file) {
      const data = new FormData();
      const filename = Date.now() + form.file.name;
      console.log(filename);
      data.append("name", filename);
      data.append("file", form.file);
      newPost.photo = filename;
      try {
        await publicRequest.post("upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await userRequest.post("posts", newPost);
      navigate("/main/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="write">
      {form.file && (
        <img className="writeImg" src={URL.createObjectURL(form.file)} alt="" />
      )}
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
            onChange={(e) => handleChange(e, e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            name="desc"
            onChange={handleChange}
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
