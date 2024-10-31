import React from "react";
import style from "./Categories.module.scss";
import { useItemContext } from "../Content"; 

const CatClick = ({ items, onSelectCategory }) => {
  const { setSelectedItemName } = useItemContext(); 

  return (
    <>
      {items.map((item) => (
        <div
          className={style.item}
          key={item.id}
          onClick={() => {
            setSelectedItemName(item.name);
            onSelectCategory(item.name);
          }}
        >
          <img src={item.image} alt="item" />
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
};

export default CatClick;

