import React from "react";
import { useEffect, useState } from "react";
import Post from "../Post/Post";
// import FlipMove from 'react-flip-move'
import Icons from "../2nd-1/PostUpdater/icons";

function Tweetbox() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    // profiles
    fetch("/tweet.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        setData(data);
      })
      .catch((err) => console.log(err));

    fetChData();
  }, []);

  const fetChData = () => {
    fetch("/users.json")
      .then((user) => {
        return user.json();
      })
      .then((data) =>
        // console.log(data[0])
        setUser(data)
      )
      .catch((err) => console.log(err));
  };

  const AddStyle = {
    backgroundColor: "#fed9ff",
    width: "100%",
    height: "90vh",
    marginRight:"0",
    // border:"5px solid red",
    overflowY: "scroll",
    textAlign: "center",
    padding: "20px",
  };
  const userStyle = {
    display: "flex",
    h4: {
      margin: "10px",
    },
  };

  return (
    <>
      <h2 style={{width:"100%"}}>Home</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width:"100%"
        }}
      >
        <h3>For you</h3>
        <h3>Following</h3>
      </div>

      <div style={AddStyle}>
        <Icons />

        <div>
          {data.map((ele, i) => {
            return (
              <div style={{width:"100%"}}>
                <div key={ele.id}>
                  <div style={userStyle}>
                    <img
                      style={{
                        borderRadius: "50%",
                        width: "10%",
                        height: "40%",
                      }}
                      src={user[i]?.image}
                      alt=""
                    />
                    <h4 style={userStyle.h4}>{ele.tweetedBy.name}</h4>
                  </div>

                  <p>{ele.content}</p>
                </div>
                <Post {...ele} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tweetbox;
