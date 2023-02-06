import { useState, useEffect, useContext } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import { AuthContext } from ".././../context/AuthContext";
const Feed = ({ username }) => {
	const [posts, setPosts] = useState([]);
	const { user } = useContext(AuthContext);
	useEffect(() => {
		const fetchPosts = async () => {
			const res = username
				? await axios.get("/posts/profile/" + username)
				: await axios.get("/posts/timeline/" + user._id);
			setPosts(res.data);
		};
		fetchPosts();
	}, [username, user._id]);
	console.log(username);
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />
				{posts.map((el, index) => (
					<Post key={index} post={el} />
				))}
			</div>
		</div>
	);
};

export default Feed;
