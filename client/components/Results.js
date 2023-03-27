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
            author_url={props.reviews[i].author_url}
            rating={props.reviews[i].rating}
            time={props.reviews[i].time}
            relative_time={props.reviews[i].relative_time}
        />)
    }

  return (
    <section className='header bg-dark text-light p-5'> 
    <div className='ResultsContainer container'>
      {review}
    </div>
    </section>
  );
};

export default Results;
