import "./singlePost.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { userRequest, PF } from "../../requestMethods";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  desc: "",
};
const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formUpdate, setFormUpdate] = useState(initialState);
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await userRequest.get("posts/" + postId);
        setPost(res.data);
        setFormUpdate({
          title: res.data.title,
          desc: res.data.desc,
        });
      } catch (err) {
        console.log(err);
      }
    };

    getPost();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await userRequest.delete("posts/" + postId, {
        data: { username: user.username },
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormUpdate({
      ...formUpdate,
      [name]: value,
    });
  };

  const handleUpdate = async () => {
    try {
      await userRequest.put(`/posts/${post._id}`, {
        username: user.username,
        ...formUpdate,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={formUpdate.title}
            className="singlePostTitleInput"
            autoFocus
            name="title"
            onChange={handleChange}
          />
        ) : (
          <h1 className="singlePostTitle">
            {formUpdate.title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor:
            <Link to={`/main/?username=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={formUpdate.desc}
            onChange={handleChange}
            name="desc"
          />
        ) : (
          <p className="singlePostDesc">{formUpdate.desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
