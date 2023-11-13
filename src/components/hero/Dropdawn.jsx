import React from "react";
import "./drop_dawn.css";
import arrow from "../../assets/icons/navbar/dropdawn_arrow.png";
import { useState } from "react";

const Dropdawn = ({ active, setActive, name, values }) => {
  const [value, setValue] = useState("");

  const hundleSet = (e) => {
    setValue(e.target.id);
  };
  const hundleClick = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <>
      <div className="dropdawn" onClick={() => hundleClick()}>
        <button className="drop_dawn_button  ">
          <div className="flex">
            <p>{value || name}</p>
            <img
              className={
                !active ? "dropdawn_arrow rotate-0" : "dropdawn_arrow_rotate "
              }
              src={arrow}
              alt=""
            />
          </div>
        </button>
        <ul
          className={!active ? "dropdawn_list " : "active "}
          onClick={() => setActive(false)}
        >
          {values.map((item) => (
            <li
              className={
                item.id === 1 ? "dropdawn_list_item" : "dropdawn_list_item "
              }
              id={item.title}
              key={item.id}
              onClick={(e) => hundleSet(e)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdawn;
