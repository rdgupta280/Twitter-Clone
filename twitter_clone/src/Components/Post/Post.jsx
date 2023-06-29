import React, { forwardRef ,useState,useRef} from "react";
import "./Post.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import FavoriteIcon from '@mui/icons-material/Favorite';

// import FlipMove from "react-flip-move";
const Post = (props) => {


  // console.log(props)
   const {id,content, createdAt, image,tweetedBy,likeCount,commentCount,reTweetsCount,isLiked}=props;
   const [like , setLike] = useState(likeCount)
   const [IsLiked , setIsLiked] = useState(isLiked)
   const[tweetCount , setTweetCount ] = useState(reTweetsCount)
   const [t , setT] = useState(false)
   const likeRef = useRef()
   const tweet = useRef ()
   const addLike = () => {
    setIsLiked(!IsLiked)
    if(IsLiked){
      setLike(pre => pre+1)
      likeRef.current.style.color = "red"
    }else{
      setLike(pre => pre-1)
      likeRef.current.style.color = "black"
    }
    console.log(like)
    
    console.log(like)
   }

   const reTweet = () => {
    setT(!t)
    if(t){
      setTweetCount(tweetCount+1)
      tweet.current.style.color = "blue"
    }else{
      setTweetCount(tweetCount-1)
      tweet.current.style.color = "black"

    }
    
   }


   return (
     <div className="post">
         {/* <div className="user-div">
          {}
             <img src="https://pbs.twimg.com/profile_images/1410279947361566721/eWFUEkSG_400x400.jpg" alt="" />
             <h6>{tweetedBy.name}</h6>
         </div> */}
         {/* <p>{content}</p> */}
         <img id="tweet-img" src={image} alt="" />
         <p><span>{createdAt}</span><span>{tweetedBy.name}</span></p>

         <div className="post__footer"> 
        
            <ChatBubbleOutlineIcon fontSize="small" />
            <span className="likediv">
            <RepeatIcon fontSize="small" onClick={reTweet} ref = {tweet}/>
            <h4>{tweetCount}</h4>
          </span>
           
            <span className="likediv">
            {/* <FavoriteBorderIcon />  */}
            <FavoriteIcon  fontSize="small" onClick={addLike} ref = {likeRef}/>
            <h4>{like}</h4>
            </span>
            
            <PublishIcon fontSize="small" />
          </div>
     </div>
   );
 };

export default Post;