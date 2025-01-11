import React from "react";

function Trending() {
  const Hastag = [
    {
      content: "Politics",
      Hastag: "Retire",
      Npost: "39.5k",
    },
    {
      content: "Cinema",
      Hastag: "Pushpa",
      Npost: "38.5k",
    },
    {
      content: "Sports",
      Hastag: "Gambhir",
      Npost: "36.5k",
    },
    {
      content: "Rishabh Pant",
      Hastag: "Rishabh Pant",
      Npost: "34.5k",
    },
  ];
  return (
    <div className="Hastag">
      <h3>What's Happening?</h3>
      <div className="Tcontainer">
        <div className="Trendpix">
          <img src="https://i1.sndcdn.com/artworks-zIPCdNnJyJSgUPBx-Ua3SAw-t500x500.jpg"></img>
        </div>
        <div>
          <h3>WAREFARE STREAMER SHOWDOWN</h3>
          <h5>December 5 2024</h5>
        </div>
      </div>
      {Hastag.map((hash) => (
        <Trend Content={hash.content} Hastag={hash.Hastag} Npost={hash.Npost} />
      ))}
      <h5>Show more</h5>
    </div>
  );
}

function Trend({ Content, Hastag, Npost }) {
  return (
    <div className="Container">
      <div>
        <h6>{Content}. Trending</h6>
        <h4>{Hastag}</h4>
        <h6>{Npost} Posts</h6>
      </div>
      <div>
        <button>...</button>
      </div>
    </div>
  );
}
export default Trending;
