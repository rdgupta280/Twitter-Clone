import React, { useState, useRef } from "react";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import PollIcon from "@mui/icons-material/Poll";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Avatar } from "@mui/material";
import MultilineTextFields from "./input";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Icons() {
  const [content, setContent] = useState("");

  const [like, setLike] = useState(0);
  const [IsLiked, setIsLiked] = useState(true);
  const [tweetCount, setTweetCount] = useState(0);
  const [t, setT] = useState(true);
  const likeRef = useRef();
  const tweet = useRef();

  const add = [
    {
      img: "https://media.licdn.com/dms/image/C5603AQEgzoyp6PA72g/profile-displayphoto-shrink_800_800/0/1652029080190?e=1693440000&v=beta&t=MmhIHcd2gEuh3T3SYxa_GCIO106kwMK0FjSrvpQJjWc",
      name: "@Shailja2607",
      content: "",
    },
  ];

  // const [msg , setMsg] = useState("")
  const [tweets, setTweet] = useState([]);


  const getData = (data) => {
    console.log(data);

    // setContent(data);
    if(data !== ""){
      const aa = [...tweets];
      // const aa =[...add]
      // setTweet(tweet)
      aa.unshift(data);
      setTweet(aa);
    }
  
  };

  const addLike = () => {
    setIsLiked(!IsLiked);
    if (IsLiked) {
      setLike(like + 1);
      likeRef.current.style.color = "red";
    } else {
      setLike(like - 1);
      likeRef.current.style.color = "black";
    }
    console.log(like);

    console.log(like);
  };

  const reTweet = (data) => {
    setT(!t);
    if (t) {
      setTweetCount(tweetCount + 1);
      tweet.current.style.color = "blue";
      // const aa = [...tweets];
   

    } else {
      setTweetCount(tweetCount - 1);
      tweet.current.style.color = "black";
    }
  };
  return (
    <div>
      <MultilineTextFields getData={getData} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ImageIcon />
        <GifBoxIcon />
        <PollIcon />
        <EmojiEmotionsIcon />
        <CalendarMonthIcon />
        <LocationOnIcon />
      </div>
      <div>
        {tweets.map((el, ind) => {
          return (
            <div style={{ marginTop: "30px" }}>
              <div style={{ display: "flex" }}>
                <Avatar
                  alt="Cindy Baker"
                  src="https://media.licdn.com/dms/image/C5603AQEgzoyp6PA72g/profile-displayphoto-shrink_400_400/0/1652029080190?e=1693440000&v=beta&t=mASqaUqDJvmUM0oY0Do5eb1eqhwYzcfP0rHlj4o689s"
                  sx={{ width: "80px", height: "80px", mr: "20px" }}
                />
                <h4 style={{ marginLeft: "20px", marginTop: "10px" }}>
                  {add[0].name}
                </h4>
              </div>
              <div style={{backgroundColor:"whitesmoke",textAlign:"center",overflow:"hidden",height:"7rem"}}>
              <h5 style={{ textAlign:"left", height: "10%",margin:"1rem"
             }}>{el}</h5>
              </div>
              <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <span className="likediv">
                  <RepeatIcon fontSize="small" onClick={reTweet} ref={tweet} />
                  <h4>{tweetCount}</h4>
                </span>
                <span className="likediv">
                  {/* <FavoriteBorderIcon />  */}
                  <FavoriteIcon
                    fontSize="small"
                    onClick={addLike}
                    ref={likeRef}
                  />
                  <h4>{like}</h4>
                </span>
                <PublishIcon fontSize="small" />
                          
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Icons;
