import React from "react";

const PreFooter = () => {
  return (
    <section className="section absolute h-[196px] flex justify-between gap-[64px] left-[370px] top-[-96px] bg-white rounded  shadow-lg shadow-[#979797c5]">
      <div className="ml-[100px] mt-[40px] mb-[66px]">
        <p className="second_text">актуально</p>
        <p className="pre_title_text mt-2">
          Получайте полезные рассылки о путешествиях
        </p>
      </div>
      <div className="my-[40px] mr-[100px]">
        <p className="description_text"> Введите e-mail адрес</p>
        <div className="flex items-center gap-2 ">
          <input
            className=" w-[280px] py-[13px] px-[10px] h-[56px] border-solid border- border-gray-600 "
            type="text"
            placeholder="name@domain.com"
          />
          <div className="  date_btn_reverse ">
            <p className="px-[36px] py-[16px] ">Подписаться на новости</p>
          </div>
        </div>
        <p className="w-[536px] product_about">
          подписываясь на новости, вы автоматически соглашаетесь с условиями
          обработки персональных данных и правилами рекламных рассылок
        </p>
      </div>
    </section>
  );
};

export default PreFooter;
