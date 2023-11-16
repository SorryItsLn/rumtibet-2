/* eslint-disable import/no-anonymous-default-export */
// Import Swiper React components
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import img1 from "../../assets/img/gallery/img1.svg";
import img2 from "../../assets/img/gallery/img2.svg";
import img3 from "../../assets/img/gallery/img3.svg";
import img4 from "../../assets/img/gallery/img4.svg";
import img5 from "../../assets/img/gallery/img5.svg";
import img6 from "../../assets/img/gallery/img6.svg";

import "./swiper_zxc.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";

export default () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section>
      <Swiper
        className="h-[300px]"
        loop={true}
        modules={[Navigation, Thumbs, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        <SwiperSlide>
          <div className="flex justify-center h-[100%] ">
            <img className="object-cover" src={img1} alt="img1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center h-[100%] ">
            <img v src={img2} alt="img1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center h-[100%]  ">
            <img className="object-cover" src={img3} alt="img1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center h-[100%] ">
            <img className="object-cover" src={img4} alt="img1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center h-[100%] ">
            <img className="object-cover" src={img5} alt="img1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center h-[100%] ">
            <img className="object-cover" src={img6} alt="img1" />
          </div>
        </SwiperSlide>
      </Swiper>{" "}
      <Swiper
        modules={[Thumbs]}
        slidesPerView={6}
        spaceBetween={10}
        onSwiper={setThumbsSwiper}
        className="w-[700px] mt-10"
      >
        <SwiperSlide className="swiper-slide">
          <div className="swiper-item ">
            <img className="item" src={img1} alt="img1" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-item">
            <img className=" item" src={img2} alt="img1" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-item">
            <img className="item" src={img3} alt="img1" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-item">
            <img className="item" src={img4} alt="img1" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-item">
            <img className="item " src={img5} alt="img1" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-item">
            <img className="item" src={img6} alt="img1" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
