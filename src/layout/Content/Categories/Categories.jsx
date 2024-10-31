// Categories.jsx
import React, { useState } from "react";
import style from "./Categories.module.scss";
import icon from "../../../images/plus.svg";
import man from "../../../images/man.svg";
import woman from "../../../images/woman.svg";
import man1 from "../../../images/man1.svg";
import woman1 from "../../../images/woman1.svg";
import CatClick from "./CatClick";
import AddCategories from "./AddCategories";

const Categories = ({ items, onSelectCategory, setIsGender, isInAddProducts }) => {
  const [isWomanSelected, setIsWomanSelected] = useState(null);
  const [isAddCategoriesVisible, setAddCategoriesVisible] = useState(false);
  const [addedCategories, setAddedCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleAddCategory = (categoryData) => {
    setAddedCategories((prevCategories) => [...prevCategories, categoryData]);
    setAddCategoriesVisible(false);
  };

  const handleGenderSelect = (isFemale) => {
    if ((isFemale && isWomanSelected === true) || (!isFemale && isWomanSelected === false)) {
      setIsWomanSelected(null);
      setIsGender(null);
    } else {
      setIsGender(isFemale ? "female" : "male");
      setIsWomanSelected(isFemale);
    }
  };

  const handleCategorySelect = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("all");
      onSelectCategory("all");
    } else {
      setSelectedCategory(category);
      onSelectCategory(category);
    }
  };

  return (
    <div className={style.header}>
      <div className={style.icons}>
        <div className={style.icon} onClick={() => handleGenderSelect(true)}>
          <img src={isWomanSelected === true ? woman1 : woman} alt="woman" />
        </div>
        <div className={style.icon} onClick={() => handleGenderSelect(false)}>
          <img src={isWomanSelected === false ? man1 : man} alt="man" />
        </div>
      </div>
      <div className={style.items}>
        <CatClick items={items} onSelectCategory={handleCategorySelect} />
        {addedCategories.map((category, index) => (
          <div
            className={style.item}
            key={index}
            onClick={() => handleCategorySelect(category.name)}
          >
            <img src={category.image} alt="Category" style={{ width: 40, height: 40 }} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      {!isInAddProducts && (
        <div className={style.button} onClick={() => setAddCategoriesVisible(true)}>
          <img src={icon} alt="plus" />
        </div>
      )}
      {isAddCategoriesVisible && (
        <AddCategories
          onClose={() => setAddCategoriesVisible(false)}
          onAddCategory={handleAddCategory}
        />
      )}
    </div>
  );
};

export default Categories;

