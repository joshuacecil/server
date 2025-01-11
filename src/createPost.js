import { ReactComponent as Globe } from "./svgs/globe.svg";
import { ReactComponent as Gallery } from "./svgs/gallery.svg";
import { ReactComponent as Gif } from "./svgs/gif.svg";
import { ReactComponent as Home } from "./svgs/home.svg";
import { ReactComponent as Emoji } from "./svgs/emoji.svg";
import { ReactComponent as Calendar } from "./svgs/calendar.svg";
import { ReactComponent as Location } from "./svgs/location.svg";
import { useRef, useState } from "react";
import Userpost from "./PostTemplate";

function Con() {
  return (
    <div class="createprofileimg">
      <img
        src="https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="
        alt=""
      />
    </div>
  );
}

function CreatePost({ onNewPost }) {
  //   onNewPost("pass the values to post");
  const textvalue = useRef();
  let textContent;
  const [link, setlink] = useState();
  const [text, setText] = useState();
  const display = (v) => {
    setlink(v);
    setText(textvalue.current.value);
  };
  const newPost = {
    profile:
      "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_400x400.jpg",
    name: "TeamX",
    username: "Team X",
    posts: [
      {
        postid: 1,
        date: new Date().toLocaleString(),
        content: text,
        postimg: link,
        video: "",
        likes: 0,
        retweets: 0,
        comment: 0,
        insight: 0,
        taggedUser: "",
      },
    ],
  };
  const sendData = () => {
    onNewPost(newPost);
  };
  return (
    <div style={{ backgroundColor: "black" }} class="con">
      <Con />

      <div class="div2">
        <div>
          <div>
            <textarea
              placeholder="Whats on your mind"
              class="inputtext"
              ref={textvalue}
            />
          </div>
          <img
            style={{ width: "30rem", borderRadius: "1rem" }}
            src={link}
          ></img>
          <Every />
        </div>
        <hr></hr>

        <div class="btncon">
          <div class="btn3">
            <ButtonComponetinput
              returnurl={display}
              icon={
                <Gallery
                  style={{ fill: "rgb(29, 155, 240)", width: "1.7rem" }}
                />
              }
            />
            <ButtonComponet
              icon={
                <Gif style={{ fill: "rgb(29, 155, 240)", width: "1.7rem" }} />
              }
            />
            <ButtonComponet
              icon={
                <Home style={{ fill: "rgb(29, 155, 240)", width: "1.7rem" }} />
              }
            />
            <ButtonComponet
              icon={
                <Emoji style={{ fill: "rgb(29, 155, 240)", width: "1.7rem" }} />
              }
            />
            <ButtonComponet
              icon={
                <Calendar
                  style={{ fill: "rgb(29, 155, 240)", width: "1.7rem" }}
                />
              }
            />
            <ButtonComponet
              icon={
                <Location
                  style={{ fill: "rgb(29, 155, 240)", width: "1.7rem" }}
                />
              }
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button class="btn" onClick={sendData}>
              Post
            </button>
          </div>
        </div>
      </div>
      {/* con2 end */}
    </div>
  );
}

function ButtonComponet({ icon }) {
  return (
    <button>
      <div class="btns1">{icon}</div>
    </button>
  );
}

function ButtonComponetinput({ icon, returnurl }) {
  const image = useRef();
  const [link, setLink] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const uploadSource = () => {
    image.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setLink(fileURL);
      setMediaType(file.type.startsWith("image/") ? "image" : "video");
      returnurl(fileURL);
    }
    setLink(null);
    setMediaType(null);
  };

  return (
    <button>
      <div class="btns1" onClick={uploadSource}>
        {icon}
        <input
          ref={image}
          onChange={handleChange}
          type="file"
          style={{ display: "none" }}
        />
      </div>
    </button>
  );
}
export default CreatePost;

function Every() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: "2rem" }}>
        <Globe style={{ fill: "rgb(29, 155, 240)", width: "1.7rem" }} />
      </div>

      <h4 style={{ margin: 0, fontSize: "15px" }}>Everyone can reply</h4>
    </div>
  );
}
