import React, { useState } from 'react';
import style from "./AddSubCategories.module.scss";
import vector from "../../../images/vector3.svg";

const AddSubCategories = ({ onAddSubCategory, onClose, categoryName }) => {
  const [subCategoryInput, setSubCategoryInput] = useState('');

  const handleInputChange = (event) => {
    setSubCategoryInput(event.target.value);
  };

  const handleAddSubCategory = () => {
    if (subCategoryInput.trim()) {
      onAddSubCategory(subCategoryInput);
      setSubCategoryInput('');
      onClose();
    }
  };

  return (
    <div className={style.screen}>
      <div className={style.addFiled}>
        <div className={style.textContainer}>
          <p className={style.text}>{categoryName}: add subcategory</p>
          <img 
            className={style.icon} 
            src={vector} 
            alt="delete" 
            onClick={onClose} 
          />
        </div>
        <form action="">
          <input
            className={style.subCategoryInput}
            type='text'
            placeholder='Subcategory'
            value={subCategoryInput}
            onChange={handleInputChange}
            required
          />
          <button 
            className={style.saveButton} 
            onClick={handleAddSubCategory} 
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSubCategories;

