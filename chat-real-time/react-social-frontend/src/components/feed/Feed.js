import { useState, useEffect } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
const Feed = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPosts = async () => {
			let username = "";
			const res = await axios.get("posts/timeline/" + username);
			setPosts(res.data);
		};
		fetchPosts();
	}, []);
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />
				{posts.map((el) => (
					<Post key={el._id} post={el} />
				))}
			</div>
		</div>
	);
};

export default Feed;
