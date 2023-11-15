import React from "react";
import BlogCard from "./BlogCard";
import img1 from "../../assets/img/blog/img1.png";
import img2 from "../../assets/img/blog/img2.svg";
import img3 from "../../assets/img/blog/img3.png";
import img4 from "../../assets/img/blog/img4.svg";

const Blog = () => {
  return (
    <section className="flex justify-center relative z-40  bg-[#F3F5F4] mt-[100px]">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-[80px] mb-[40px] flex flex-col justify-center items-center gap-[8px]">
          <p className="second_text">делимся впечатлениями</p>
          <p className="pre_title_text"> Блог о путешествиях</p>
        </div>
        <div className=" grid grid-cols-2 gap-4">
          <BlogCard
            img={img1}
            title={"Красивая Италя, какая она в реальности?"}
            description={
              "Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
            }
            date={"01/04/2023"}
          />
          <BlogCard
            img={img2}
            title={"Долой сомнения! Весь мир открыт для вас!"}
            description={
              "Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... "
            }
            date={"01/04/2023"}
          />
          <BlogCard
            img={img3}
            title={"Как подготовиться к путешествию в одиночку? "}
            description={
              "Для современного мира базовый вектор развития предполагает."
            }
            date={"01/04/2023"}
          />
          <BlogCard
            img={img4}
            title={"Индия ... летим?"}
            description={"Для современного мира базовый."}
            date={"01/04/2023"}
          />
        </div>
        <div className="mt-[50px] mb-[100px]">
          <div className="date_btn_reverse w-[200px]">
            <p className="px-[36px] py-[16px] ">Найти программу</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
