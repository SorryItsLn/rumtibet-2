import React from "react";
import rectangle9 from "../../assets/img/programs/Rectangle 8.png";
import rectangle10 from "../../assets/img/programs/Rectangle 9.png";
import rectangle11 from "../../assets/img/programs/Rectangle 10.png";
import rectangle12 from "../../assets/img/programs/Rectangle 11.png";

//icons
import icons1 from "../../assets/icons/programs/Group.svg";
import icons2 from "../../assets/icons/programs/Vector (1).svg";
import icons3 from "../../assets/icons/programs/Vector (2).svg";

const Programs = () => {
  return (
    <section className="mt-[180px] flex justify-center  ">
      <div className="flex justify-between section">
        <div className="w-[600px] flex flex-col gap-[40px]">
          <div>
            <p className="second_text mb-[8px]">наше предложение</p>
            <p className="pre_title_text">Лучшие программы для тебя</p>
          </div>
          <div>
            <p className="product_text  text-black">
              Его корни уходят в один фрагмент классической латыни 45 года н.э.,
              то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
              латыни из колледжа.
            </p>
          </div>

          <div className="flex items-center">
            {" "}
            <div className="w-[50px] h-[50px] bg-[#E5EEEB] rounded-md  mr-4">
              <img
                className="w-[50px] h-[50px] p-2  "
                src={icons1}
                alt="icons1"
              />
            </div>
            <div className="w-[514px] ">
              <p className="product_cover_text">Опытный гид</p>
              <p className="product_about">
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[50px] h-[50px] mr-4 bg-[#E3E6EE] rounded-md">
              <img
                className="w-[50px] h-[50px] p-2 "
                src={icons2}
                alt="icons2"
              />
            </div>
            <div className="w-[514px]">
              <p className="product_cover_text">Безопасный поход</p>
              <p className="product_about">
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            {" "}
            <div className="w-[50px] h-[50px] mr-4 bg-[#F3F1E1] rounded-md">
              <img
                className="w-[50px] h-[50px] p-2 "
                src={icons3}
                alt="icons3"
              />
            </div>
            <div className="w-[514px]">
              <p className="product_cover_text">Лояльные цены</p>
              <p className="product_about">
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации.
              </p>
            </div>
          </div>

          <div>
            <div className="date_btn_reverse  w-[200px]">
              <p className="px-[36px] py-[16px] ">Найти программу</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2  w-[510px] h-[510px] gap-[10px] mt-[40px] mb-[141px] ">
          <div className="m-0 p-0 ">
            <img className=" " src={rectangle9} alt="" />
          </div>
          <div className="m-0 p-0 ">
            {" "}
            <img src={rectangle10} alt="" />
          </div>
          <div className="m-0 p-0">
            {" "}
            <img src={rectangle11} alt="" />
          </div>
          <div className="m-0 p-0">
            {" "}
            <img src={rectangle12} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
