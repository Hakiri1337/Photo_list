import React from "react";

const ImgBox = ({ item }) => {
  const { url, author } = item;
  return (
    <div className="img-box">
      <img
        src={`http://source.unsplash.com/${url.split("/").pop()}`}
        alt={author}
        width={200}
        height={200}
      />
    </div>
  );
};

export default ImgBox;
