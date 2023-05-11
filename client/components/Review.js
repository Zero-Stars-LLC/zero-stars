import React, { useState } from 'react';

const Review = (props) => {
  console.log('props.name: ', props.name);
  const date = new Date(props.time * 1000).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <div className="card text-start mb-4">
      <div className="card-header">{date}</div>
      <div className="card-body">
        <h5 className="card-title">Rating: {props.rating}</h5>
        <p className="card-text fst-italic font-monospace">
          "{props.text}" -- {props.name}
        </p>
        <a href={props.author_url} className="btn btn-danger">
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
