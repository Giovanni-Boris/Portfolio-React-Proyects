import "./profileRightbar.css";
import { publicRequest } from "../../requestMethods";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const ProfileRightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(false);
  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [currentUser, user?._id]);

  useEffect(() => {
    if (!user._id) return;
    const getFriends = async () => {
      try {
        //console.log("error1");
        const friendList = await publicRequest.get(
          "/users/friends/" + user._id
        );
        setFriends(friendList.data);
      } catch (err) {
        //console.log("error");
        console.log(err);
      }
    };
    getFriends();
  }, [user]);
  const handleClick = async (e) => {
    try {
      if (followed) {
        await publicRequest.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await publicRequest.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {}
  };
  return (
    <>
      {user.username !== currentUser.username && (
        <button className="rightbarFollowButton" onClick={handleClick}>
          {followed ? "Unfollow" : "Follow"}
          {followed ? <RemoveIcon /> : <AddIcon />}
        </button>
      )}
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City</span>
          <span className="rightbarInfoValue">{user.city}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From</span>
          <span className="rightbarInfoValue">{user.from}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship</span>
          <span className="rightbarInfoValue">
            {user.relationship === 1
              ? "Single"
              : user.relationship === 2
              ? "Married"
              : "-"}
          </span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        {friends.map((friend, index) => (
          <Link
            key={index}
            to={"/profile/" + friend.username}
            style={{ textDecoration: "none" }}
          >
            <div className="rightbarFollowing">
              <img
                className="rightbarFollowingImg"
                src={
                  friend.profilePicture
                    ? PF + friend.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
              <span className="rightbarFollowingName">{friend.username}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProfileRightbar;
