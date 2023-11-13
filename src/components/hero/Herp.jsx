import React from "react";

import { useState } from "react";

import Navbar from "./Navbar";
import "./Hero.css";
import Dropdawn from "./Dropdawn";

const Herp = () => {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [type, setType] = useState("date");
  const [type2, setType2] = useState("date");

  const values = [
    { title: "Великобритная", id: 2 },
    { title: "Россия", id: 3 },
    { title: "США", id: 4 },
  ];
  const values2 = [
    { title: "4", id: 2 },
    { title: "5", id: 3 },
    { title: "6", id: 4 },
  ];

  console.log(active, "active");
  return (
    <section className="bg w-full" onClick={(e) => setActive(false)}>
      <div className="flex justify-center pt-5 scale-[1]">
        <Navbar />
      </div>
      <div
        className="flex justify-center
      "
      >
        <div className="flex flex-col items-start justify-center mt-[403px] ">
          <div className=" title_text w-[1110px] h-[150px] ">
            <p>
              Насладись прогулкой в горах <br />с командой единомышленников
            </p>
          </div>
          <div className="px-10 h-[161px] bg-[#FFFFFF33] mt-[41px]  rounded-xl flex justify-center items-center gap-7">
            <div onClick={(e) => e.stopPropagation()}>
              <Dropdawn
                values={values}
                active={active}
                setActive={setActive}
                name={"Локации для тура"}
              />
              <p className="default_text mt-[8px]">выберите из списка</p>
            </div>
            <div>
              <div className="">
                <div className="date_input justify-center items-center">
                  <p className="date_p  py-[14px] ml-[10px]">От:</p>
                  <input
                    className="date_input_item py-[13px]  px-[10px]"
                    type={type}
                    placeholder="Выберете дату"
                  />
                  <p className="date_p py-[14px] ">До:</p>
                  <input
                    className="date_input_item px-[10px] py-[13px] "
                    type={type2}
                    placeholder="Выберете дату"
                  />
                </div>
                <p className="default_text mt-[8px]">укажите диапазон</p>
              </div>
            </div>
            <div>
              <Dropdawn
                values={values2}
                active={active1}
                setActive={setActive1}
                name={"Участники"}
              />
              <p className="default_text mt-[8px] ">минимум 4 человека</p>
            </div>
            <div className="date_btn">
              <p className="px-[36px] py-[16px] ">Найти программу</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herp;
