import React from 'react';
import RetreatCard from './RetreatCard';

const RetreatList = ({ retreats }) => {
  return (
    <div className="retreat-list">
      {retreats.map(retreat => (
        <RetreatCard key={retreat.id} retreat={retreat} />
      ))}
    </div>
  );
};

export default RetreatList;
