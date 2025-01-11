import React from "react";
import { ReactComponent as Dot } from "./svgs/dot.svg";
import { ReactComponent as Save } from "./svgs/save.svg";
import { ReactComponent as Share } from "./svgs/share.svg";
import { ReactComponent as Comment } from "./svgs/comment.svg";
import { ReactComponent as Analytics } from "./svgs/analytics.svg";
import { ReactComponent as Like } from "./svgs/like.svg";
import { ReactComponent as Retweet } from "./svgs/retweet.svg";

function Userpost({
  profile,
  name,
  username,
  date,
  content,
  postimg,
  likes,
  retweets,
  comment,
  insight,
  postid,
}) {
  return (
    <div className="postgrid">
      <div className="col1">
        <Profile profile={profile} />
      </div>
      <div className="col2">
        <Rowone name={name} username={username} date={date} />
        <Content Content={content} postimg={postimg} />
        <LikesBar
          id={postid}
          likes={likes}
          retweets={retweets}
          comment={comment}
          insight={insight}
        />
      </div>
    </div>
  );
}

function Profile({ profile }) {
  return (
    <div className="profileimg">
      <img src={profile} crossorigin="anonymous"></img>
    </div>
  );
}

function Rowone({ name, username, date }) {
  return (
    <div className="rowone">
      <div className="user">
        <h2 className="whitefonts">{name}</h2>
        <div className="userinfo">
          <h4 className="littletext">@{username}</h4>
          <h4 className="littletext" style={{ marginLeft: "5px" }}>
            {date}
          </h4>
        </div>
      </div>
      <div>
        <button className="button-dots">
          <Dot />
        </button>
      </div>
    </div>
  );
}

function Content({ Content, postimg }) {
  return (
    <>
      <p className="content whitefonts">{Content}</p>
      <img
        className="postedimage"
        alt={""}
        style={{ borderRadius: "1rem" }}
        src={postimg}
      ></img>
    </>
  );
}

function LikesBar({ likes, retweets, comment, insight }) {
  return (
    <div className="likescon">
      <div className="flex blue">
        <div className="circle blue"> </div>
        <Comment className="blue" />

        <span>{comment}</span>
      </div>

      <div className="flex green">
        <div className="circle"> </div>
        <Retweet className="green" />

        <span>{retweets}</span>
      </div>

      <div className="flex pink">
        <div className="circle"> </div>
        <Like className="pink" />

        <span>{likes}</span>
      </div>

      <div className="flex blue">
        <div className="circle"> </div>
        <Analytics className="blue" />

        <span>{insight}</span>
      </div>

      <div className="flex ">
        <div className="blue" id="left">
          <div className="circle"></div>
          <Save className="left blue" />
        </div>
        <div className="blue">
          <div className="circle"></div>
          <Share className="blue" />
        </div>
      </div>
    </div>
  );
}

export default Userpost;
