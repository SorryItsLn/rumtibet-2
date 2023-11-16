import React from "react";

import "./gallery.css";
import img1 from "../../assets/img/gallery/img1.svg";
import img2 from "../../assets/img/gallery/img2.svg";
import img3 from "../../assets/img/gallery/img3.svg";
import img4 from "../../assets/img/gallery/img4.svg";
import img5 from "../../assets/img/gallery/img5.svg";
import img6 from "../../assets/img/gallery/img6.svg";
import zoom from "./zoom.png";

const Gallery = ({ setSwipe }) => {
  return (
    <section className=" flex justify-center mt-10">
      <div className="section flex flex-col items-center">
        <div className="flex flex-col justify-center items-center gap-[16px] mb-[40px]">
          <p className="second_text">фото-отчет</p>
          <p className="pre_title_text">Делимся впечатлениями</p>
        </div>
        <div className="gallery__media">
          <div
            className=" img1 img  "
            onClick={() => {
              setSwipe(true);
            }}
          >
            <div className="image-zoom absolute w-[100%] h-[100%] bg-[#474747bd]  rounded-md flex items-center justify-center z-10">
              <img className="w-[40px]" src={zoom} alt="" />
            </div>
            <img className="img" src={img1} alt="" />
          </div>
          <div
            className="img2 img"
            onClick={() => {
              setSwipe(true);
            }}
          >
            <div className="image-zoom absolute w-[100%] h-[100%] bg-[#474747bd]  rounded-md flex items-center justify-center">
              <img className="w-[40px]" src={zoom} alt="" />
            </div>
            <img src={img2} alt="" />
          </div>
          <div
            className="img3 img"
            onClick={() => {
              setSwipe(true);
            }}
          >
            <div className="image-zoom absolute w-[100%] h-[100%] bg-[#474747bd]  rounded-md flex items-center justify-center">
              <img className="w-[40px]" src={zoom} alt="" />
            </div>
            <img src={img3} alt="" />
          </div>
          <div
            className="img4 img"
            onClick={() => {
              setSwipe(true);
            }}
          >
            <div className="image-zoom absolute w-[100%] h-[100%] bg-[#474747bd]  rounded-md flex items-center justify-center">
              <img className="w-[40px]" src={zoom} alt="" />
            </div>
            <img src={img5} alt="" />
          </div>
          <div
            className="img5 img"
            onClick={() => {
              setSwipe(true);
            }}
          >
            <div className="image-zoom absolute w-[100%] h-[100%] bg-[#474747bd]  rounded-md flex items-center justify-center">
              <img className="w-[40px]" src={zoom} alt="" />
            </div>
            <img src={img4} alt="" />
          </div>
          <div
            className="img6 img"
            onClick={() => {
              setSwipe(true);
            }}
          >
            <div className="image-zoom absolute w-[100%] h-[100%] bg-[#474747bd]  rounded-md flex items-center justify-center">
              <img className="w-[40px]" src={zoom} alt="" />
            </div>
            <img src={img6} alt="" />
          </div>
        </div>
        <div className="date_btn_reverse  w-[200px] ml-[32px] mt-[45px] text-center ">
          <p className="px-[25px] py-[13px]  text-center">Наш pinterest</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
