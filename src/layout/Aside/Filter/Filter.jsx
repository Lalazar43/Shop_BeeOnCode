import React, { useState } from "react";
import style from "./Filter.module.scss";
import dateIcon from "../../../images/date.svg";
import vector from "../../../images/vector2.svg";

const Filter = ({ onClose }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(7500);
  
  const priceGap = 0;
  const maxRange = 10000;

  const handlePriceInputChange = (e, type) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value);
    if (value < 0) return;

    if (type === "min") {
      if (value <= maxPrice - priceGap) {
        setMinPrice(value);
      }
    } else {
      if (value >= minPrice + priceGap && value <= maxRange) {
        setMaxPrice(value);
      }
    }
  };

  const handleRangeInputChange = (e, type) => {
    const value = parseInt(e.target.value);

    if (type === "min") {
      if (value <= maxPrice - priceGap) {
        setMinPrice(value);
      } else {
        setMinPrice(maxPrice - priceGap);
      }
    } else {
      if (value >= minPrice + priceGap) {
        setMaxPrice(value);
      } else {
        setMaxPrice(minPrice + priceGap);
      }
    }
  };

  const handleSave = () => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    onClose();
  };

  return (
    <div className={style.container}>
      <div className={style.datesContainer}>
        <div className={style.dateContainer}>
          <p>Date</p>
          <div className={style.dateIconContainer}>
            <img src={dateIcon} alt="Date" />
          </div>
        </div>
        <div className={style.dateContainer}>
          <p>Date</p>
          <div className={style.dateIconContainer}>
            <img src={dateIcon} alt="Date" />
          </div>
        </div>
        <div className={style.closeHandler} onClick={onClose}>
          <img src={vector} alt="Close filter" />
        </div>
      </div>
      <div className={style.wrapper}>
        <p>Rate</p>
        <div className={style.slider}>
          <div
            className={style.progress}
            style={{
              left: `${(minPrice / maxRange) * 100}%`,
              right: `${100 - (maxPrice / maxRange) * 100}%`,
            }}
          ></div>
        </div>
        <div className={style.rangeInput}>
          <input
            type="range"
            className={style.rangeMin}
            min="0"
            max={maxRange}
            value={minPrice}
            step="100"
            onChange={(e) => handleRangeInputChange(e, "min")}
          />
          <input
            type="range"
            className={style.rangeMax}
            min="0"
            max={maxRange}
            value={maxPrice}
            step="100"
            onChange={(e) => handleRangeInputChange(e, "max")}
          />
        </div>
        <div className={style.priceInput}>
          <div className={style.field}>
            <input
              type="number"
              placeholder="Min"
              className={style.inputMin}
              value={minPrice === 0 ? "" : minPrice}
              onChange={(e) => handlePriceInputChange(e, "min")}
              min="0"
            />
          </div>
          <div className={style.separator}>—</div>
          <div className={style.field}>
            <input
              type="number"
              placeholder="Max"
              className={style.inputMax}
              value={maxPrice === 0 ? "" : maxPrice}
              onChange={(e) => handlePriceInputChange(e, "max")}
              min="0"
            />
          </div>
        </div>
      </div>
      <div className={style.wrapper}>
        <p>Production price</p>
        <div className={style.slider}>
          <div
            className={style.progress}
            style={{
              left: `${(minPrice / maxRange) * 100}%`,
              right: `${100 - (maxPrice / maxRange) * 100}%`,
            }}
          ></div>
        </div>
        <div className={style.rangeInput}>
          <input
            type="range"
            className={style.rangeMin}
            min="0"
            max={maxRange}
            value={minPrice}
            step="100"
            onChange={(e) => handleRangeInputChange(e, "min")}
          />
          <input
            type="range"
            className={style.rangeMax}
            min="0"
            max={maxRange}
            value={maxPrice}
            step="100"
            onChange={(e) => handleRangeInputChange(e, "max")}
          />
        </div>
        <div className={style.priceInput}>
          <div className={style.field}>
            <input
              type="number"
              placeholder="Min"
              className={style.inputMin}
              value={minPrice === 0 ? "" : minPrice}
              onChange={(e) => handlePriceInputChange(e, "min")}
              min="0"
            />
          </div>
          <div className={style.separator}>—</div>
          <div className={style.field}>
            <input
              type="number"
              placeholder="Max"
              className={style.inputMax}
              value={maxPrice === 0 ? "" : maxPrice}
              onChange={(e) => handlePriceInputChange(e, "max")}
              min="0"
            />
          </div>
        </div>
      </div>
      <button className={style.saveButton} onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default Filter;

