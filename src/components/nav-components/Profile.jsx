import React from "react";
import "../scss/Profile.scss";

function Profile({ currentUser }) {
  return (
    <div className="profile-container">
      <img src={currentUser.img} />
      <div id="info">
        <div id="private">
          <p id="full-name">User: {currentUser.fullName || "undefind"}</p>
          <p id="full-name">Gender: {currentUser.gender || "undefind"}</p>
          <p id="full-name">Age: {currentUser.age || "undefind"}</p>
          <p id="full-name">Role: {currentUser.role || "undefind"}</p>
          <p id="full-name">Position: {currentUser.position || "undefind"}</p>
        </div>
        <div id="desc">
          <p>About</p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa iste
          qui veritatis ut eaque quasi, sapiente deserunt? Optio perspiciatis ea
          sint quibusdam eos corporis exercitationem soluta? Commodi, corporis.
          Delectus error optio aliquam pariatur, hic quia sit voluptatem, iusto
          incidunt sint accusamus eligendi eius maxime asperiores quaerat rerum,
          nobis voluptatum reprehenderit?
        </div>
      </div>
    </div>
  );
}

export default Profile;
