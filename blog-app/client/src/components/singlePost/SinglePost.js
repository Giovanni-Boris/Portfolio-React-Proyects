import "./singlePost.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await userRequest.get("posts/" + postId);
      setPost(res.data);
    };

    getPost();
  }, [postId]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor: <b>{post.username}</b>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
