import React, { useState } from 'react';
import style from "./AddCategories.module.scss";
import vector from "../../../images/vector3.svg";
import uploadIcon from "../../../images/vector4.svg";
import man from "../../../images/man.svg";
import woman from "../../../images/woman.svg";
import man1 from "../../../images/man1.svg";
import woman1 from "../../../images/woman1.svg";

const AddCategories = ({ onClose, onAddCategory }) => {
  const [categoryName, setCategoryName] = useState(''); 
  const [gender, setGender] = useState(''); 
  const [image, setImage] = useState(null); 


  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleAddCategory = () => {
    if (categoryName && image) {
      const newCategory = {
        name: categoryName,
        gender,
        image,
      };
      onAddCategory(newCategory);
      setCategoryName(''); 
      setImage(null);
      setGender('');
    }
  };

  return (
    <div className={style.screen}>
      <div className={style.addFiled}>
        <div className={style.textContainer}>
          <p className={style.text}>Add subcategory</p>
          <img
            className={style.icon}
            src={vector}
            alt="delete"
            onClick={onClose} 
          />
        </div>
        <div className={style.genderContainers}>
          <div
            className={style.genderContainer}
            onClick={() => {
              setGender('female');
            }}
          >
            <img
              className={style.icon}
              src={gender === 'female' ? woman1 : woman}
              alt="female"
            />
            <p>Female</p>
          </div>
          <div
            className={style.genderContainer}
            onClick={() => {
              setGender('male');
            }}
          >
            <img
              className={style.icon}
              src={gender === 'male' ? man1 : man}
              alt="male"
            />
            <p>Male</p>
          </div>
        </div>
        <form action="">
          <input
            className={style.addCategoryInput}
            type='text'
            placeholder='Category'
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
          <div className={style.uploadFileInput}>
            <div className={style.uploadIcon}>
              <img src={uploadIcon} alt="uploadIcon" />
            </div>
            <input type="file" accept="image/*" onChange={handleFileChange} required />
          </div>
          <button type="submit" className={style.saveButton} onClick={handleAddCategory}>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddCategories;
