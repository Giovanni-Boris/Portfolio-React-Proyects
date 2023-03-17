import "./chatOnline.css";
import { useState, useEffect } from "react";
import { publicRequest } from "../../requestMethods";
const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await publicRequest.get("/users/friends/" + currentId);
      setFriends(res.data);
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
    //console.log(friends, "onlineFriends", onlineFriends);
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await publicRequest.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="chatOnline">
      {onlineFriends.map((el, index) => (
        <div
          key={index}
          className="chatOnlineFriend"
          onClick={() => handleClick(el)}
        >
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                el.profilePicture
                  ? PF + el.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{el.username}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatOnline;
