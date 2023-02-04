import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";
import { useState } from "react";
const Post = ({ post }) => {
	const user = Users.filter((u) => u.id === post?.userId)[0];
	const [like, setLike] = useState(post.like);
	const [isLiked, setIsLiked] = useState(false);
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
							src={`/assets/${user.profilePicture}`}
							alt=""
						/>
						<span className="postUsername">{user.username}</span>
						<span className="postDate">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVertIcon />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.desc}</span>
					<img
						className="postImg"
						src={`/assets/${post.photo}`}
						alt=""
					/>
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							className="likeIcon"
							src="/assets/like.png"
							alt=""
							onClick={handleLike}
						/>
						<img
							className="likeIcon"
							src="assets/heart.png"
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
