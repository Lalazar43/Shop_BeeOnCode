import React, { useState, useEffect } from "react"; 
import style from "./SubCategories.module.scss";
import icon from "../../../images/plus.svg";
import { useItemContext } from "../Content"; 
import AddSubCategories from "./AddSubCategories";


const SubCategories = ({ items, subcategory, isInAddProducts }) => {
  const { selectedItemName } = useItemContext();
  
  const [isAddSubCategoriesVisible, setAddSubCategoriesVisible] = useState(false);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    if (selectedItemName) {
      setSubCategories(subcategory[selectedItemName.toLowerCase()] || []);
    } else {
      setSubCategories([]);
    }
  }, [selectedItemName, subcategory]);

  const toggleAddSubCategories = () => {
    setAddSubCategoriesVisible((prev) => !prev);
  };

  const addSubCategory = (newSubCategory) => {
    const isDuplicate = subCategories.some(elem => elem.name.toLowerCase() === newSubCategory.toLowerCase());
    
    if (!isDuplicate) {
      const newSubCategories = [...subCategories, { id: Date.now(), name: newSubCategory }];
      setSubCategories(newSubCategories);
    } else {
      console.warn("Subcategory already exists");
    }
  };

  return (
    <div>
      <div className={style.main}>
        <div>
          <div className={style.header}>
            {subCategories.length > 0 ? (
              subCategories.map((elem) => (
                <div key={elem.id}>
                  <div className={style.item}>
                    <p>{elem.name}</p>
                    <div className={style.itemLine}></div>
                  </div>
                </div>
              ))
            ) : null}
          </div>
          <div className={style.line}></div>
        </div>
     
        {!isInAddProducts && selectedItemName && subCategories.length > 0 && (
          <div className={style.plus} onClick={toggleAddSubCategories}>
            <img src={icon} alt="plus" />
          </div>
        )}
      </div>

      {isAddSubCategoriesVisible && (
        <AddSubCategories 
          categoryName={selectedItemName} 
          onAddSubCategory={addSubCategory} 
          onClose={() => setAddSubCategoriesVisible(false)} 
        />
      )}
    </div>
  );
};

export default SubCategories;
