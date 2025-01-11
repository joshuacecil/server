import "./App.css";
import React, { useState, useEffect } from "react";
import FollowCon from "./Follow";
import Post from "./Post";
import Sidebar from "./Siderbar";
import Subscribe from "./Subscribe";
import Comments from "./comment";
import TopBar from "./search";
import Trending from "./trending";
import CreatePost from "./createPost";

function App() {
  const [posts, setPosts] = useState([
    {
      profile:
        "https://pbs.twimg.com/profile_images/1858316737780781056/kPL61o0F_400x400.jpg",
      name: "Elon Musk",
      username: "elonmusk",
      posts: [
        {
          postid: 1,
          date: "Dec 9, 2024",
          content:
            "Starship will allow us to become multi planetary and reach Mars.",
          postimg:
            "https://pbs.twimg.com/media/GeT324rbMAASAXv?format=jpg&name=900x900",
          video: "",
          likes: 1000,
          retweets: 10,
          comment: 100,
          insight: 70,
          taggedUser: "",
        },
      ],
    },
    {
      profile:
        "https://pbs.twimg.com/profile_images/1747638026832887808/ZCUr0JdI_400x400.jpg",
      name: "FIFA World Cup",
      username: "FIFAWorldCup",
      posts: [
        {
          postid: 1,
          date: "Today",
          content: "ohh!!! Beauty❤️‍🔥",
          postimg:
            "https://pbs.twimg.com/media/Db4RfZlVQAAXJzm?format=jpg&name=900x900",
          video: "",
          likes: 1000,
          retweets: 100,
          comment: 30,
          insight: 4000,
          taggedUser: "",
        },
      ],
    },
    {
      profile:
        "https://pbs.twimg.com/profile_images/1855179233976315904/9kL6oh4J_400x400.jpg",
      name: "Listen My Son",
      username: "@ListenMySon",
      posts: [
        {
          postid: 1,
          date: "15h",
          content: "Are you ready? 🔥",
          postimg:
            "https://pbs.twimg.com/media/GedaJaqW4AAQKK5?format=jpg&name=medium",
          video: "",
          likes: "1.5k",
          retweets: 125,
          comment: "5k",
          insight: "10k",
          taggedUser: "",
        },
      ],
    },

    {
      profile:
        "https://pbs.twimg.com/profile_images/1721770924285001728/mcGvTd0B_400x400.jpg",
      name: "Syed Kasim Siraj",
      username: "SyedKasimsiraj2",
      posts: [
        {
          postid: 1,
          date: "Jan 17, 2023",
          content: "#traditional #traditionalwear #pongal2023 #pongalFestival",
          postimg:
            "https://pbs.twimg.com/media/FmppfuxaMAEyTsI?format=jpg&name=large",
          video: "",
          likes: 1000,
          retweets: 100,
          comment: 30,
          insight: 4000,
          taggedUser: "",
        },
      ],
    },
    {
      profile:
        "https://pbs.twimg.com/profile_images/1858316737780781056/kPL61o0F_400x400.jpg",
      name: "Elon Musk",
      username: "elonmusk",
      posts: [
        {
          postid: 1,
          date: "Dec 9, 2024",
          content:
            "Starship will allow us to become multi planetary and reach Mars.",
          postimg:
            "https://pbs.twimg.com/media/GeT324rbMAASAXv?format=jpg&name=900x900",
          video: "",
          likes: 1000,
          retweets: 100,
          comment: 30,
          insight: 4000,
          taggedUser: "",
        },
      ],
    },
  ]);

  const handleNewPost = (newPost) => {
    console.log(newPost);
    setPosts((prevPosts) => [newPost, ...posts]);
  };
  return (
    <div className="mainGrid">
      <div className="columnOne">
        <Sidebar />
      </div>
      <div className="columnTwo">
        <TopBar />
        <CreatePost onNewPost={handleNewPost} />
        {posts === null ? <p>Loading...</p> : <Post users={posts} />}
      </div>
      <div className="columnThree">
        <Subscribe
          paragraph={
            "Subscribe to unlock new features and if eligible, receive a share of revenue."
          }
          buttonname={"Subscribe"}
        />
        {/* <Comments /> */}
        <Trending />
        <FollowCon />
      </div>
    </div>
  );
}

export default App;
