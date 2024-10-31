import React, { useState } from 'react';
import AsideFilter from './FilterButton/AsideFilter';
import Filter from './Filter/Filter';

const Aside = () => {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };
  
  return (
    
    <div>
      <AsideFilter onFilterClick={toggleFilter} />
      {showFilter && <Filter onClose={toggleFilter} />}
    </div>
  );
};
export default Aside
