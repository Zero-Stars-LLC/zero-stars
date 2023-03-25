import React, { useState } from 'react';

const Review = (props) => {
    console.log('props.name: ', props.name)

  return (
    <div className='Review'>
        <p>Name: {props.name}</p>
        <p>Text: {props.text} </p>
    </div>
  );
};

export default Review;
