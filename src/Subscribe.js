import React from "react";

function Subscribe({ paragraph, buttonname }) {
  // JavaScirpt
  return (
    <div class="sub">
      <div class="subscribe">
        <h2>
          <b>subscribe to Premium</b>
        </h2>
      </div>
      <div class="para">
        <p>{paragraph}</p>
      </div>
      <div class="btn2">
        <button class="btn1">{buttonname}</button>
      </div>
    </div>
  );
}
export default Subscribe;
