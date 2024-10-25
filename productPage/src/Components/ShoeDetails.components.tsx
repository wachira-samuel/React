import React from 'react';
import './ShoeDetails.css'; // Import for styling
import shoe from '../assets/images/vapour.jpeg'

type prop ={
    price: number;
    size: number;
}

const ShoeDetails = ({ price, size }: prop) => {
  return (
    <div className="shoe-details">
      <img src={shoe} alt='shoe'></img>
      <h1> Product Name</h1>
      <h2> More info</h2>
      <h3> Product Description</h3>
      <h3> COLOUR </h3>
      <h3> SIZE: {size}</h3>
      <h4> BUY </h4>
    </div>
  );
};

export default ShoeDetails;
