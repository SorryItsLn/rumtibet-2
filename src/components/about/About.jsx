import React from "react";
import img1 from "../../assets/img/about/about1.png";
import img2 from "../../assets/img/about/about2.png";
import circle from "../../assets/icons/navbar/about/circle.png";
import rectangle from "../../assets/icons/navbar/about/rectangle.svg";

const About = ({ frame, setFrame }) => {
  return (
    <section className=" flex justify-center mt-[130px]   h-full">
      <div className="flex section justify-between">
        <div className="w-[480px] h-[526px]  relative">
          <div className=" absolute">
            <img src={img1} alt="" />
          </div>
          <div className=" absolute top-[126px] left-[130px]">
            <img src={img2} alt="" />
          </div>
          <div>
            <div
              className="absolute top-[315px] left-[294px] cursor-pointer "
              onClick={() => setFrame(true)}
            >
              <img src={circle} alt="" />
            </div>
            <div
              className="absolute top-[329px] left-[307px]"
              onClick={() => setFrame(true)}
            >
              <img src={rectangle} alt="rectangle" />
            </div>
          </div>
        </div>
        <div className="w-[580px] flex flex-col  justify-center gap-[40px]">
          <div>
            <p className="second_text">о нашем походе</p>
            <p className="mt-2 pre_title_text">
              Исследуйте все горные массивы мира вместе с нами
            </p>
          </div>
          <div>
            <p className="description_text">
              Его корни уходят в один фрагмент классической латыни 45 года н.э.,
              то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
              латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из
              самых странных слов в Lorem Ipsum, "consectetur"и занялся его
              поисками в классической латинской литературе.
            </p>
          </div>
          <div>
            <div className="date_btn w-[200px]">
              <p className="px-[36px] py-[16px] ">Найти программу</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
