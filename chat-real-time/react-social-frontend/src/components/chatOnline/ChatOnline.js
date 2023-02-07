import "./chatOnline.css";

const ChatOnline = () => {
	return (
		<div className="ChatOnline">
			<div className="chatOnlineFriend">
				<div className="chatOnlineImgContainer">
					<img
						className="chatOnlineImg"
						src="/assets/person/9.jpeg"
						alt=""
					/>
					<div className="chatOnlineBadge"></div>
				</div>
				<span className="chatOnlineName">John Doe</span>
			</div>
			<div className="chatOnlineFriend">
				<div className="chatOnlineImgContainer">
					<img
						className="chatOnlineImg"
						src="/assets/person/9.jpeg"
						alt=""
					/>
					<div className="chatOnlineBadge"></div>
				</div>
				<span className="chatOnlineName">John Doe</span>
			</div>
			<div className="chatOnlineFriend">
				<div className="chatOnlineImgContainer">
					<img
						className="chatOnlineImg"
						src="/assets/person/9.jpeg"
						alt=""
					/>
					<div className="chatOnlineBadge"></div>
				</div>
				<span className="chatOnlineName">John Doe</span>
			</div>
		</div>
	);
};

export default ChatOnline;
