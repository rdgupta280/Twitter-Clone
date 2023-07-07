import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from '@mui/material/Button';
import { Avatar } from "@mui/material";

export default function MultilineTextFields(props) {
  const [msg , setMsg] = useState("")

  const sendData = (e) => {
    e.preventDefault()
    props.getData(msg)
    setMsg("")

  }
  return (
    <div style={{display:"flex"}}>
    <Avatar alt="Cindy Baker" src="https://media.licdn.com/dms/image/C5603AQEgzoyp6PA72g/profile-displayphoto-shrink_400_400/0/1652029080190?e=1693440000&v=beta&t=mASqaUqDJvmUM0oY0Do5eb1eqhwYzcfP0rHlj4o689s" sx={{width:"80px",height:"80px",mr:"20px"}}/>
    <Box
      
      component="form"
      sx={{
        "& .MuiTextField-root": {  width: "50ch",mb:"25px",background:"white",display:"flex" },
      }}
      noValidate
      autoComplete="on"
      onSubmit={sendData}
    >
      <div>
        <TextField
          id="standard-textarea"
          label="Whats happening"
          placeholder="Add tweet"
          multiline
          variant="standard"
          onChange={(e) =>setMsg(e.target.value)}
          value={msg}
        />
      </div>
      <button style={{
        background:"skyBlue",
        fontSize:"25px",
        color:"black",
        fontWeight:"600",
        marginLeft:"10.5em",
        marginTop:"-1rem",
       marginBottom:"1rem",
        borderRadius:"10px",
        // border:"5px solid green",
        
      
        padding:"5px 5px"

      
      }}>Tweet</button>
      {/* <Button variant="contained">Tweet</Button> */}
    </Box>
    </div>
   
  );
}
