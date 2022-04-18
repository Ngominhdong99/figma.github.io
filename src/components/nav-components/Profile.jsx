import React from "react";
import "../scss/Profile.scss";
import profile from "../../images/Anh the.png";

function Profile({ currentUser }) {
  return (
    <div className="profile-container">
      <img src={currentUser.img} />
      <div id="info">
        <div id="private">
          <p id="full-name">User: {currentUser.fullName}</p>
          <p id="full-name">Gender: {currentUser.gender}</p>
          <p id="full-name">Age: {currentUser.age}</p>
          <p id="full-name">Role: {currentUser.role}</p>
          <p id="full-name">Position: {currentUser.position}</p>
        </div>
        <p id="desc">
          <p>About</p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa iste
          qui veritatis ut eaque quasi, sapiente deserunt? Optio perspiciatis ea
          sint quibusdam eos corporis exercitationem soluta? Commodi, corporis.
          Delectus error optio aliquam pariatur, hic quia sit voluptatem, iusto
          incidunt sint accusamus eligendi eius maxime asperiores quaerat rerum,
          nobis voluptatum reprehenderit?
        </p>
      </div>
    </div>
  );
}

export default Profile;
