import "./home.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { useLocation } from "react-router-dom";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const getPosts = async () => {
      const res = await userRequest.get("posts" + search);
      setPosts(res.data);
    };
    getPosts();
  }, [search]);
  console.log(posts);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
