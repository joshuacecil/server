import React, { useRef, useState } from "react";

function ButtonComponent({ icon, onUpload }) {
  const image = useRef();
  const [link, setLink] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [content, setContent] = useState("");

  const uploadSource = () => {
    image.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setLink(fileURL);

      const type = file.type.startsWith("image/") ? "image" : "video";
      setMediaType(type);

      onUpload({ fileURL, type });
    }
  };

  return (
    <button onClick={uploadSource}>
      <div class="btns1">
        {icon}
        <input
          type="file"
          onChange={handleChange}
          ref={image}
          style={{ display: "none" }}
        ></input>
      </div>
    </button>
  );
}

export default ButtonComponent;
