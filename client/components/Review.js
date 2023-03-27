import React, { useState } from 'react';

const Review = (props) => {
  console.log('props.name: ', props.name);

  return (
    <div class='card text-start'>
      <div class='card-header'>{props.relative_time}</div>
      <div class='card-body'>
        <h5 class='card-title'>Rating: {props.rating}</h5>
        <p class='card-text fst-italic font-monospace'>
          "{props.text}" -- {props.name}
        </p>
        <a href={props.author_url} class='btn btn-danger'>
          More Info
        </a>
      </div>
    </div>

    // <div className='Review text-start text-wrap'>
    //     <h4>Name: </h4> <p>{props.name}</p>
    //     <p className='fst-italic font-monospace'> {props.text} </p>
    // </div>
  );
};

export default Review;
