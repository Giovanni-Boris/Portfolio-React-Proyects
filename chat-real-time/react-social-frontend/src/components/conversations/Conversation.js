import "./conversation.css";

const Conversation = () => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<div className="conversation">
			<img
				className="conversationImg"
				src={PF + "person/10.jpeg"}
				alt=""
			/>
			<span className="conversationName">Jhon Doe </span>
		</div>
	);
};

export default Conversation;
