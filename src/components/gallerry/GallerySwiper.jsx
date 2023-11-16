import React from "react";
import Swiper from "./Swiper";
import close from "./free-icon-cross-sign-57165.png";

const GallerySwiper = ({ swipe, setSwipe }) => {
  return (
    <div
      className={
        swipe
          ? "w-[100%] h-[100vh] bg-[#1a3e3ef6] absolute flex items-center justify-center transition-all z-20 m-0 p-0 cursor-pointer "
          : " none"
      }
      onClick={() => {
        setSwipe(false);
      }}
    >
      <div
        className="w-[25px] absolute right-[30px] top-[30px] cursor-pointer hover:scale-110  pointer-events-auto"
        onClick={() => {
          setSwipe(false);
        }}
      >
        <img src={close} alt="close" />
      </div>
      <div
        className="z-30  min-w-0 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Swiper />
      </div>
    </div>
  );
};

export default GallerySwiper;
