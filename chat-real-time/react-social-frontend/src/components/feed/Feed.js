import { useState, useEffect, useContext } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { publicRequest } from "../../requestMethods";
import { AuthContext } from ".././../context/AuthContext";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await publicRequest.get("/posts/profile/" + username)
        : await publicRequest.get("/posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((el, index) => (
          <Post key={index} post={el} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
