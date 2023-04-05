import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import SidebarListItem from "./SidebarListItem";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
const listOptions = [
  { icon: RssFeedIcon, name: "Feed" },
  { icon: ChatIcon, name: "Chats" },
  { icon: PlayCircleFilledOutlinedIcon, name: "Videos" },
  { icon: GroupIcon, name: "Groups" },
  { icon: BookmarkIcon, name: "Bookmarks" },
  { icon: HelpOutlineIcon, name: "Questions" },
  { icon: WorkOutlineIcon, name: "Jobs" },
  { icon: EventIcon, name: "Events" },
  { icon: SchoolIcon, name: "Courses" },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {listOptions.map((el, index) => (
            <SidebarListItem key={el.name} Icon={el.icon} options={el.name} />
          ))}
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
