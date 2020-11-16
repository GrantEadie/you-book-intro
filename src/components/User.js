import React from "react";
import PropTypes from "prop-types";

function User(props){
  return (
    <React.Fragment>
      <p class="profileName">{props.name}</p>
      <ul class="profileDetails">
        <li>posts</li>
        <li>followers</li>
        <li>likes</li>
      </ul>
      <ul class="profileDetails">
        <li>{props.posts}</li>
        <li>{props.followers}</li>
        <li>{props.likes}</li>
      </ul>
    </React.Fragment>
  );
}

User.propTypes = {
  name: PropTypes.string,
  posts: PropTypes.string,
  followers: PropTypes.string,
  likes: PropTypes.string
};

export default User;