import React from 'react';

const RetreatCard = ({ retreat }) => {
  return (
    <div className="retreat-card">
      <img src={retreat.image} alt={retreat.title} />
      <h2>{retreat.title}</h2>
      <p>{retreat.description}</p>
      <p>Date: {retreat.date}</p>
      <p>Location: {retreat.location}</p>
      <p>Price: ${retreat.price}</p>
    </div>
  );
};

export default RetreatCard;
