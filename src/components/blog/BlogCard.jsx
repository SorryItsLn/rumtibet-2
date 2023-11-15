import React from "react";

const BlogCard = ({ img, title, description, date }) => {
  return (
    <div className=" bg-[#FDFDFD] rounded-[10px] ">
      <div className="p-[16px] flex gap-[24px]">
        <div className="w-[230px] h-[280px]">
          <img src={img} alt="img" />
        </div>
        <div className="w-[294px] h-[280px] flex flex-col justify-between  ">
          <div>
            <div className="mt-[5px]">
              <p className="blog_card_text cursor-pointer  underline-offset-3 hover:underline ">
                {title}
              </p>
            </div>
            <div className="mt-[24px]">
              <p className="description_text">{description}</p>
            </div>
          </div>
          <div className=" justify-self-start">
            <div className="flex justify-between mt-[24px] justify-self-end ">
              <p className="text-[#f2be22]">{date}</p>
              <p className="text-[#1a3e3e] cursor-pointer  underline-offset-3 hover:underline ">
                читать статью
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
