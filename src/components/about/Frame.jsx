import React from "react";
import "./Frame.css";

const Frame = ({ frame, setFrame }) => {
  const playVid = (e) => {
    console.log(e.target.children);
    setFrame(false);
  };

  return (
    <section
      className={frame ? "main_frame active" : " none"}
      onClick={(e) => playVid(e)}
    >
      <iframe
        width="69%"
        height="78%"
        // src="https://www.youtube.com/embed/WujKJpxaUHk"
        title="Макс Корж - Горы по колено (Official video)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        onClick={(e) => e.stopPropagation()}
      ></iframe>
    </section>
  );
};

export default Frame;
