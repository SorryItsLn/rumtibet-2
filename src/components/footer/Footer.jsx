import React from "react";
import arrow from "./assets/arrow.svg";
import "./footer.css";
import icon from "./assets/Vector.svg";
import icon1 from "./assets/Vector1.svg";
import icon2 from "./assets/Vector2.svg";
import icon3 from "./assets/Vector3.svg";

const Footer = () => {
  return (
    <section>
      <div className="w-full bg-[#1a3e3e]  flex justify-center">
        <div className=" section h-[594px] flex  justify-between items-center mt-[178px]">
          <div className="w-full flex justify-between">
            <div className="flex flex-col justify-start items-start w-[480px]">
              <p className="title">Компания «РумТибет»</p>
              <p className="description mt-[17px]">
                Его корни уходят в один фрагмент классической латыни 45 года
                н.э., то есть более двух тысячелетий назад. Ричард МакКлинток,
                профессор латыни из колледжа Hampden-Sydney.
              </p>
              <div className="description flex gap-[24px] mt-[80px] mb-[32px]">
                <p>info@domain.com</p>
                <p>+7 (123) 456-78-90</p>
              </div>
              <div className="flex gap-6 ">
                <img src={icon} alt="" />
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
              </div>
            </div>
            <div>
              <li className="description">
                <ul>
                  <p className="title">Наши услуги</p>
                </ul>
                <ul>
                  <img src={arrow} alt="" />
                  <p>Прогулки в горы летом</p>
                </ul>
                <ul>
                  <img src={arrow} alt="" />
                  <p>Зимние походы в горы</p>
                </ul>
                <ul>
                  <img src={arrow} alt="" />
                  <p>Посещение храмов в горах</p>
                </ul>
                <ul>
                  <img src={arrow} alt="" />
                  <p>Экстремальные виды туризма</p>
                </ul>
                <ul>
                  <img src={arrow} alt="" />
                  <p>Походы в джунглях Амазонии</p>
                </ul>
                <ul>
                  <img src={arrow} alt="" />
                  <p>Поездка в Африку</p>
                </ul>
              </li>
            </div>
            <div>
              <li className="description">
                <ul>
                  <p className="title">Важно для путешествий</p>
                </ul>
                <ul>
                  <img src={arrow} alt="" />
                  <p>Как собрать в долгий поход?</p>
                </ul>
                <ul>
                  <img src={arrow} alt="" />
                  <p>Жизненно важные предметы для похода</p>
                </ul>
                <ul>
                  <img src={arrow} alt="" />
                  <p>Медицинская страховка, гарантии безопасности</p>
                </ul>
                <ul>
                  <img src={arrow} alt="" />
                  <p>Если вы врач - загляните сюда</p>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black h-[66px]">
        <div className="flex justify-center items-center h-full">
          <div className=" section flex justify-between items-center">
            <p className="description">ИП Константинопольский К.К., 2023</p>
            <p className="description">
              Политика обработки персональных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
