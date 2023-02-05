import { useState, useEffect } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
const Feed = ({ username }) => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPosts = async () => {
			const res = username
				? await axios.get("/posts/profile/" + username)
				: await axios.get("/posts/timeline/62247bb17bd40d303d6da510");
			setPosts(res.data);
		};
		fetchPosts();
	}, [username]);
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
