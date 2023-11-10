import React from "react";
import "./Hero.css";
import Navbar from "./Navbar";

const Herp = () => {
  return (
    <section className="bg w-full  ">
      <div className="flex justify-center pt-5 scale-[1]">
        <Navbar />
      </div>
      <div
        className="flex justify-center
      "
      >
        <div className="flex flex-col items-start justify-center mt-[403px] ">
          <div className=" title_text w-[1080px] h-[150px] ">
            <p>
              Насладись прогулкой в горах <br />с командой единомышленников
            </p>
          </div>
          <div className="w-[1180px] h-[161px] bg-[#FFFFFF33] mt-[41px]  rounded-xl flex justify-center items-center gap-7">
            <div>
              <select type="text" placeholder="Локация для тура" />
              <p></p>
            </div>
            <div>
              <div>
                <input type="date" placeholder="Дата похода" />
                <input type="date" />
              </div>
              <p></p>
            </div>
            <div>
              <select type="text" placeholder="Участники" />
              <p></p>
            </div>

            <div>
              <a href="">Найти программу</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herp;
