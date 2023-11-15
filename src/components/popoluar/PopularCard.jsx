import React from "react";
import "./popular.css";

const PopularCard = ({ img }) => {
  console.log(img);
  return (
    <section className=" card_main flex justify-center gap-[20px]">
      <div
        className={`w-[380px] h-[500px] bg-[url('./assets/img/popular/img.png')]`}
      >
        <div className="card_content_main">
          <div className="card_content">
            <div className="pt-[20px] pb-[23px] pl-[32px]">
              <p className="card_title ">Озеро возле гор</p>
              <p className="card_description">романтическое приключение</p>
            </div>
            <div className="card_title py-[25px] pr-[32px]">
              {" "}
              <div className="card_price">480 $</div>
            </div>
          </div>
          <div className="card_content_swiper -z-50">
            <p className="card_description pt-[20px] pb-[23px] px-[32px] transition-all ">
              Его корни уходят в один фрагмент классической латыни 45 года н.
              э., то есть более двух тысячелетий назад. Ричард МакКлинток,
              профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял
              одно из самых странных слов в Lorem Ipsum, «consectetur» и занялся
              его поисками в классической латинской литературе.
            </p>
            <div className="date_btn_reverse  w-[200px] ml-[32px] mt-[105px] ">
              <p className="px-[25px] py-[13px] ">Программа тура</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-[380px] h-[500px] bg-[url('./assets/img/popular/img1.png')] relative`}
      >
        <div className="card_content_main">
          <div className="card_content">
            <div className="pt-[20px] pb-[23px] pl-[32px]">
              <p className="card_title">Озеро возле гор</p>
              <p className="card_description">романтическое приключение</p>
            </div>
            <div className="card_title py-[25px] pr-[32px]">
              {" "}
              <div className="card_price">480 $</div>
            </div>
            <div></div>
          </div>
          <div className="card_content_swiper -z-50">
            <p className="card_description pt-[20px] pb-[23px] px-[32px] transition-all ">
              Его корни уходят в один фрагмент классической латыни 45 года н.
              э., то есть более двух тысячелетий назад. Ричард МакКлинток,
              профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял
              одно из самых странных слов в Lorem Ipsum, «consectetur» и занялся
              его поисками в классической латинской литературе.
            </p>
            <div className="date_btn_reverse  w-[200px] ml-[32px] mt-[105px] ">
              <p className="px-[25px] py-[13px] ">Программа тура</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-[380px] h-[500px] bg-[url('./assets/img/popular/img2.png')]`}
      >
        <div className="card_content_main">
          <div className="card_content">
            <div className="pt-[20px] pb-[23px] pl-[32px]">
              <p className="card_title">Озеро возле гор</p>
              <p className="card_description">романтическое приключение</p>
            </div>
            <div className="card_title card_title py-[25px] pr-[32px]">
              {" "}
              <div className="card_price">480 $</div>
            </div>
          </div>
          <div className="card_content_swiper -z-50">
            <p className="card_description pt-[20px] pb-[23px] px-[32px] transition-all ">
              Его корни уходят в один фрагмент классической латыни 45 года н.
              э., то есть более двух тысячелетий назад. Ричард МакКлинток,
              профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял
              одно из самых странных слов в Lorem Ipsum, «consectetur» и занялся
              его поисками в классической латинской литературе.
            </p>
            <div className="date_btn_reverse  w-[200px] ml-[32px] mt-[105px] ">
              <p className="px-[25px] py-[13px] ">Программа тура</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCard;
