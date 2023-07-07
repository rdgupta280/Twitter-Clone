import { Button, colors } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Sidebar.css";
import SidebarLink from "./SidebarLink";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";

import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { AiTwotoneNotification } from "react-icons/ai";
import { BsFillBookmarksFill } from "react-icons/bs";
import { Si1001Tracklists } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { GrTwitter } from "react-icons/gr";
import { Avatar } from "@mui/material";
function Sidebar() {
  const options = [
    { link: "Bookmarks", icon: <BookmarkBorderOutlinedIcon /> },
    { link: "List", icon: <ListAltOutlinedIcon /> },
    { link: "Topic", icon: <ChatOutlinedIcon /> },
    { link: "Moments", icon: <OfflineBoltOutlinedIcon /> },
    { link: "Newsletters", icon: <PostAddOutlinedIcon /> },
    { link: "Twitter Ads", icon: <CallMadeOutlinedIcon /> },
    { link: "Analytics", icon: <BarChartOutlinedIcon /> },
    { link: "Settings", icon: <SettingsOutlinedIcon /> },
    { link: "Help Center", icon: <HelpOutlineOutlinedIcon /> },
    { link: "Display", icon: <BrushOutlinedIcon /> },
    { link: "Keyboard shortcuts", icon: <AccessibilityNewOutlinedIcon /> },
  ];

  const navigate = useNavigate()

  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const logOut = () => {
    navigate("/")

  }
  return (
    <div className="all">
      <div className="sidebar">
        <GrTwitter
          style={{
            fontSize: "50px",
            color: "blue",
          }}
        />
        <div className="items">
          <SidebarLink text="Home" Icon={AiFillHome} />
          <SidebarLink text="Explore" Icon={BsSearch} className="links" />
          <SidebarLink
            text="Notifications"
            Icon={GrNotification}
            className="links"
          />
          <SidebarLink
            text="Messages"
            Icon={AiTwotoneNotification}
            className="links"
          />
          <SidebarLink
            text="Bookmarks"
            Icon={BsFillBookmarksFill}
            className="links"
          />
          <SidebarLink text="Lists" Icon={Si1001Tracklists} />
          <SidebarLink text="Profile" Icon={CgProfile} className="links" />
          <Button onClick={handleClick} id="moreLinks">
            <MoreHorizIcon /> More
          </Button>
        </div>
        <Button id="tweet">Tweet</Button>

        <Menu
          open={open}
          onClose={handleClose}
          id="long-menu"
          style={{
            width: "20%",
            padding: "1em",
            marginTop: "2rem",
            // border :"5px solid blue",
            height:"75%",
            marginLeft:"0.5rem"
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.link} onClick={handleClose} className="open">
              {option.icon} {option.link}
            </MenuItem>
          ))}
        </Menu>
      </div>

      <div className="logout">
        <Avatar
          alt="Cindy Baker"
          src="https://media.licdn.com/dms/image/C5603AQEgzoyp6PA72g/profile-displayphoto-shrink_400_400/0/1652029080190?e=1693440000&v=beta&t=mASqaUqDJvmUM0oY0Do5eb1eqhwYzcfP0rHlj4o689s"
          sx={{ width: "80px", height: "80px", mr: "20px" }}
        />
        <div style={{width:"50%",height:"100%",marginRight:"2rem",
      }}>
        {/* <h6>Shailja Gupta</h6> */}
        <h5>@Shailja2607</h5>
        <button className="hello"onClick={logOut}>Logout</button>
        </div>
        
      </div>
    </div>
  );
}

export default Sidebar;
