import React from "react";
function FollowCon() {
  let user = [
    {
      src: "https://pbs.twimg.com/profile_images/1243477767913484288/CLgpI-PM_400x400.jpg",
      name: "Greater Chennai Corp",
      username: "@chennaicorp",
    },
    {
      src: "https://pbs.twimg.com/profile_images/1604943357750419465/wk5BAmKG_400x400.png",
      name: "SportsCenter",
      username: "@SportsCenter",
    },
    {
      src: "https://pbs.twimg.com/profile_images/1796584693451624448/LthOWdfn_400x400.jpg",
      name: "Physics Today",
      username: "@PhysicsToday",
    },
  ];
  return (
    <div className="account">
      <h3>Who to follow</h3>
      {user.map((user) => (
        <Follow src={user.src} name={user.name} username={user.username} />
      ))}

      <h4>Show more</h4>
    </div>
  );
}

function Follow({ src, name, username }) {
  return (
    <div className="followcon">
      <div>
        <img className="followconimg" src={src}></img>
      </div>
      <div className="text">
        <h3>{name}</h3>
        <h6>{username}</h6>
      </div>
      <div>
        {" "}
        <button className="white">Follow</button>{" "}
      </div>
    </div>
  );
}

export default FollowCon;
