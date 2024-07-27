import React from 'react';

const FilterSection = ({ handleFilterChange }) => {
  return (
    <div className="filter-section">
      <select onChange={(e) => handleFilterChange(e, 'date')}>
        <option value="">Select Date</option>
        <option value="2024-07-01">2024-07-01</option>
        <option value="2024-07-15">2024-07-15</option>
      </select>
      <select onChange={(e) => handleFilterChange(e, 'type')}>
        <option value="">Select Type</option>
        <option value="Yoga">Yoga</option>
        <option value="Meditation">Meditation</option>
        <option value="Detox">Detox</option>
      </select>
    </div>
  );
};

export default FilterSection;
