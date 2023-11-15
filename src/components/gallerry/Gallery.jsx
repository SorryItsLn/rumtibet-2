import React from "react";

import "./gallery.css";
import img1 from "../../assets/img/gallery/img1.svg";
import img2 from "../../assets/img/gallery/img2.svg";
import img3 from "../../assets/img/gallery/img3.svg";
import img4 from "../../assets/img/gallery/img4.svg";
import img5 from "../../assets/img/gallery/img5.svg";
import img6 from "../../assets/img/gallery/img6.svg";
const Gallery = () => {
  return (
    <section className=" flex justify-center mt-10">
      <div className="section flex flex-col items-center">
        <div>
          <p>фото-отчет</p>
          <p>Делимся впечатлениями</p>
        </div>
        <div className="gallery__media">
          <div className="img1 relative">
            <div className="absolute w-[100%] h-[100%] bg-[#474747bd]  rounded-md"></div>
            <img className="img" src={img1} alt="" />
          </div>
          <div className="img2 img">
            <img src={img2} alt="" />
          </div>
          <div className="img3 img">
            <img src={img3} alt="" />
          </div>
          <div className="img4 img">
            <img src={img5} alt="" />
          </div>
          <div className="img5 img">
            <img src={img4} alt="" />
          </div>
          <div className="img6 img">
            <img src={img6} alt="" />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Gallery;
