import React from 'react';
import './ShoeType.css'; // Import for styling

type prop = {
  type: number;
}

const ShoeType = ({ type }: prop) => {
  return (
    <div className="shoe-type">
      <h2>Amount: {type}</h2>
    </div>
  );
};

export default ShoeType;
