import React, { useState } from "react";
import uploadIcon from "../../../images/vector4.svg";
import closeIcon from "../../../images/vector3.svg";
import style from "./AddProducts.module.scss";

const AddProducts = ({ children, onClose, onAddProduct, gender, type }) => {
  const [productName, setProductName] = useState(""); 
  const [productCost, setProductCost] = useState("" ); 
  const [uploadedImage, setUploadedImage] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newProduct = {
      id: Date.now(), 
      image: uploadedImage,
      name: productName, 
      cost: productCost, 
      gender: gender, 
      type: type 
    };

    onAddProduct(newProduct); 
    resetForm();
  };

  const resetForm = () => {
    setProductName("");
    setProductCost("");
    setUploadedImage("");
  };

  return (
    <div className={style.screen}>
      <div className={style.container}>
        <div className={style.header}>
          <p>Add product</p>
          <img className={style.closeIcon} src={closeIcon} alt="Close" onClick={onClose} />
        </div>
        <div className={style.categories}>
          <div className={style.insideComponent}>{children}</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={style.componentsContainer}>
            <div className={style.uploadFileContainer}>
              <div className={style.uploadFileInput}>
                <div className={style.uploadIcon}>
                  <img src={uploadIcon} alt="uploadIcon" />
                </div>
                <input type="file" accept="image/*" required onChange={handleImageChange} />
              </div>
            </div>
            <div className={style.properties}>
              <p>Article number</p>
              <input
                className={style.propertiesInput}
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className={style.properties}>
              <p>Rate</p>
              <input
                className={style.propertiesInput}
                type="text"
                value={productCost}
                onChange={(e) => setProductCost(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={style.buttonContainer}>
            <button type="submit" className={style.saveButton}>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
