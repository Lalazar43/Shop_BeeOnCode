import React from "react";
import style from "./Products.module.scss";
import icon from "../../../images/plus.svg";

const Products = ({ items, category, searchItem, isGender, onShowAddProduct }) => {
  const filteredItems = items.filter(({ type, name, gender }) => {
    const isCategoryMatch = category === 'all' || type === category;
    const isSearchMatch = !searchItem.trim() || name.toLowerCase().includes(searchItem.toLowerCase().trim());
    const isGenderMatch = isGender ? gender === isGender : true;

    return isCategoryMatch && isSearchMatch && isGenderMatch;
  });

  return (
    <div>
      <div className={style.addProducts} onClick={onShowAddProduct}>
        <img className={style.icon} src={icon} alt="Add Product" />
      </div>
      <div className={style.header}>
        {filteredItems.map(prod => (
          <div className={style.product} key={prod.id}>
            <div className={style.image}>
              <img src={prod.image} alt={prod.name} />
            </div>
            <div className={style.text}>
              <h1>{prod.name}</h1>
              <p>{prod.cost}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;




