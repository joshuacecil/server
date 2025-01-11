import React from "react";

function Comments({ name, username, followbutton, message }) {
  return (
    <div>
      <div class="container">
        <h2>Relevant people</h2>
        <div class="mrg">
          <div>
            <img
              src="https://app.airdata.com/p_image?p_id=CgYEAQ4KTVFPCVUEBgFQGgMHBlJeChcGHgkHUgUABg&r=946005"
              alt=""
              class="imge"
            />
          </div>

          <div class="pnt">
            <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
              <div>
                <p>{name}</p>
                <p style={{ color: "gray" }}>{username}</p>
              </div>
              <div>
                <button class="btn white">{followbutton}</button>
              </div>
            </div>

            <div>
              <p style={{ marginTop: "1rem" }}>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
