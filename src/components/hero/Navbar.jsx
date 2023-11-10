import React from "react";
import logo from "../../assets/icons/navbar/Group 19 2.svg";

const Navbar = () => {
  return (
    <section className="w-[1220px] h-[72px]">
      <div className="flex  justify-between items-center">
        <div className="w-[137px]">
          <div>
            <img className="" src={logo} alt="logo" />
          </div>
        </div>
        <div className="flex  gap-7  whitespace-nowrap pl-[210px]  ">
          <p className="navbar_text">Главная</p>
          <p className="navbar_text">Про гида</p>
          <p className="navbar_text">Программа тура</p>
          <p className="navbar_text">Стоимость</p>
          <p className="navbar_text">Блог</p>
          <p className="navbar_text">Контакты</p>
        </div>
        <div className="ml-[20px] button_green flex items-center justify-center px-[24px] py-[12px]">
          <a href="zxc">Консультация</a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
