import React, { useRef } from "react";
import style from "./Header.module.scss";
import icon from "../../images/ico.svg";

const Header = ({ setSearchItem }) => {
  const searchBar = useRef("");

  const handleInputChange = () => {
    if (searchBar.current.value === "") {
      setSearchItem("");
    }
  };

  const clickHandler = () => {
    if (searchBar.current.value !== "") {
      setSearchItem(searchBar.current.value.toLowerCase());
    }
  };

  return (
    <div className={style.header}>
      <form>
        <div className={style.main}>
          <input
            ref={searchBar}
            type="text"
            placeholder="Search"
            className={style.search}
            onChange={handleInputChange} 
          />
          <div className={style.icon} onClick={clickHandler}>
            <img src={icon} alt="icon" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;


