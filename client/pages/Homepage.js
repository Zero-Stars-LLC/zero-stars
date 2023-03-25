import React, { useState } from 'react';
import SearchBar from '../components/SearchBar.js';
import Results from '../components/Results.js';

const Homepage = () => {
  // Set page level state to hold reviews receieved
  const [reviews, setReviews] = useState({});

  // Get reviews
  const getReviews = async (placeId) => {
    try {
      //QUESTIONS: API Endpoint & Req body
      const res = await fetch('/api', {
        method: 'GET',
        headers: {
          'Content-Type': 'applications/json',
        },
        body: JSON.stringify({
          place_id: placeId,
        }),
      });
      const data = await res.json();
      if (data) {
        console.log(data)
        setReviews({ data });
      }
    } catch {
      console.log(err);
    }
  };

  return (
    <div>
        <div class='header'> 
            <h1>Zero Stars</h1>
            <h4>You are better than your negative reviews.</h4>
        </div>
        <SearchBar getReviews={getReviews}/>
        <Results reviews={reviews}/>
    </div>
  );
};

export default Homepage;
