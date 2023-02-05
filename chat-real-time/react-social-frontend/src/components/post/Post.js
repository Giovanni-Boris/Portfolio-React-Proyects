import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
const Post = ({ post }) => {
	const [like, setLike] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);
	const [user, setUser] = useState({});
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	//console.log("Pf", PF);
	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`users/${post.userId}`);
			setUser(res.data);
		};
		fetchUser();
	}, [post.userId]);

	const handleLike = (e) => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							className="postProfileImg"
							src={
								user.profilePicture ||
								PF + "person/noAvatar.png"
							}
							alt=""
						/>
						<span className="postUsername">{user.username}</span>
						<span className="postDate">
							{moment(post.createdAt).fromNow()}
						</span>
					</div>
					<div className="postTopRight">
						<MoreVertIcon />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.desc}</span>
					<img className="postImg" src={PF + post.img} alt="" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							className="likeIcon"
							src={PF + "like.png"}
							alt=""
							onClick={handleLike}
						/>
						<img
							className="likeIcon"
							src={PF + "heart.png"}
							alt=""
							onClick={handleLike}
						/>
						<span className="postLikeCounter">
							{like} people like it
						</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommnetText">
							{post.comment} comments
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
