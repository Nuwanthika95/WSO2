import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const TopBar = () => {
  return (
    <AppBar position="static" style={{backgroundColor:"#778ca3"}}>
      <Toolbar>
        <Typography variant="h6" component="div" >
          Employee Management App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
