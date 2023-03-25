import React, { useState } from 'react';
import Review from './Review.js'

const Results = (props) => {
    console.log('props.reviews: ', props.reviews)
    const review = [];
    for(let i = 1; i < props.reviews.length; i++) {
        console.log('props.reviews[i]: ', props.reviews[i].author_name
        )
        review.push(<Review name={props.reviews[i].author_name}
            text={props.reviews[i].text}
        />)
    }

  return (
    <div className='ResultsContainer'>
        <div className='Results'>
        {review}
        </div>
    </div>
  );
};

export default Results;
