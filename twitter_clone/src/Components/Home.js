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
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Sidebar />
        <div>
        <Tweetbox/>
        </div>
        
        <Widgets />
      </div>
    </div>
  );
}

export default Home;
