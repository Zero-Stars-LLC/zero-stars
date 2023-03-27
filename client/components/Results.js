import React, { useState } from 'react';
import Review from './Review.js';
import ReactDOM from 'react-dom';
import { Fireworks } from '@fireworks-js/react';
const fireworksContainer = document.getElementById('fireworks-container');

const Results = (props) => {
  console.log('props.reviews: ', props.reviews);
  const review = [];
  for (let i = 0; i < props.reviews.length; i++) {
    console.log('props.reviews[i]: ', props.reviews[i].author_name);
    review.push(
      <Review
        name={props.reviews[i].author_name}
        text={props.reviews[i].text}
        author_url={props.reviews[i].author_url}
        rating={props.reviews[i].rating}
        time={props.reviews[i].time}
        relative_time={props.reviews[i].relative_time}
      />
    );
  }

  return (
    <section className='header bg-dark text-light p-5'>
      {!props.reviews.length && props.received ? (
        <p>
          No bad reviews!
          {fireworksContainer &&
            ReactDOM.createPortal(
              <Fireworks
                options={{
                  rocketsPoint: {
                    min: 0,
                    max: 100,
                  },
                  autoStop: true,
                  duration: 5000,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              />,
              fireworksContainer
            )}
        </p>
      ) : (
        <div className='ResultsContainer container'>{review}</div>
      )}
    </section>
  );
};

export default Results;
