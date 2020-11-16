import React from "react";
import User from "./User";

const masterUserDetails = [
  {
    name: 'Grant L\'Kayl',
    followers: 87,
    likes: 33,
    posts: 4,
    description: 'He is rated among the best Zimbabwean cricketers in history for his consistent left arm spin and fine batting skills. He was a fitness fanatic who spends hours in the gym, and was also regarded as a brilliant fielder who was usually seen in the gully. "Flower Power", the combination of Grant and his brother Andy Flower, was the mainstay of Zimbabwean batting for a decade. He was his team\'s most successful opening batsman who played the role of anchorman, with strokeplayers coming in down the order.'
  },
]

function Profile(){
  return (
    <React.Fragment>
      <div class="profileBox">
        <div class="profileHeader">
        </div>
        <div class="profilePicture">
          <svg id="person" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
        </div>
          {masterUserDetails.map((user, index) => 
          <User name={user.name}
          posts={user.posts}
          followers={user.followers}
          likes={user.likes}
          key={index}/>
          )}
      </div>
    </React.Fragment>
  );
}

export default Profile;