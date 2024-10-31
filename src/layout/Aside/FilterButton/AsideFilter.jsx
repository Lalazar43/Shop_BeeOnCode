import React from 'react';
import style from './AsideFilter.module.scss';
import vector1 from '../../../images/vektor1.svg';
import vector2 from '../../../images/vector2.svg';

const AsideFilter = ({ onFilterClick }) => {
  return (
    <div className={style.filterBox} onClick={onFilterClick}>
      <div className={style.icon1}>  
        <img src={vector1} alt="vector1" />
      </div>
      <div className={style.container}>
        <p className={style.verticalText}>Filter</p>
        <div className={style.icon2}>
          <img src={vector2} alt="vector2" />
        </div>
      </div>
    </div>
  );
};

export default AsideFilter;
