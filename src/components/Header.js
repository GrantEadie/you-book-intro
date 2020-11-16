import React from "react";

function Header(){
  return (
    <React.Fragment>
    <div class="topnav">
      <a href="#home">Home</a>
      <a href="#about">Notifications</a>
      <a href="#contact">Messages</a>
      <input type="text" placeholder="Post.."></input>
      <input type="text" placeholder="Search.."></input>
    </div>
    <hr/>
    </React.Fragment>
  );
}

export default Header;