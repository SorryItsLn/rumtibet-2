import React from "react";
import PopularCard from "./PopularCard";

const Popular = () => {
  return (
    <section className=" flex justify-center mt-10">
      <div className="section">
        <div className="flex flex-col items-center gap-[8px]">
          <p className="second_text">по версии отдыхающих</p>
          <p className="pre_title_text">Популярные направления</p>
        </div>
        <div className="flex justify-center gap-[20px] mt-10">
          <PopularCard img={"img"} />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Popular;
