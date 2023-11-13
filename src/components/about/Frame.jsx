import React from "react";
import "./Frame.css";

const Frame = ({ frame, setFrame }) => {
  return (
    <section className={frame ? "main_frame" : " none"}>
      <iframe
        width="69%"
        height="78%"
        src="https://www.youtube.com/embed/WujKJpxaUHk"
        title="Макс Корж - Горы по колено (Official video)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default Frame;
