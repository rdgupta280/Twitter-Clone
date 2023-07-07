import React from "react";
import Sidebar from "./Pages/FirstSec/Sidebar";
import Tweetbox from "./Tweetbox/tweetbox";

import Icons from "./2nd-1/PostUpdater/icons";
import Widgets from "./2nd-1/PostUpdater/Wedges";

function Home() {
  return (
    <div>
      <div
        style={{
          // border:"5px solid red",
          display: "flex",
          justifyContent: "center",
          width:"100%",
          // height:"80%"
        }}
      >
        <Sidebar />
        <div style={{
          width:"60%"}}>
        <Tweetbox/>
        </div>
        
        <Widgets />
      </div>
    </div>
  );
}

export default Home;
