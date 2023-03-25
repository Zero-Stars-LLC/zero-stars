import React, { useState } from 'react';
import SearchBar from '../components/SearchBar.js';
import Results from '../components/Results.js';

const Homepage = () => {
  // Set page level state to hold reviews receieved
  const [reviews, setReviews] = useState([{
    author_name: '',
    author_url: '',
    profile_photo_url: '',
    rating: '',
    text: '',
    time: '',
  }]);

  // Get reviews
  const getReviews = async (placeId) => {
    console.log('making fetch req')
    try {
      const res = await fetch(`/api/${placeId}`)
      const data = await res.json();
      if (data) {
        console.log(data)
        const newState = reviews.slice();
        data.forEach(el => {
            newState.push(el)
        })
        setReviews(newState)
        console.log('reviews: ', reviews)
      }
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div>
        <div className='header'> 
            <h1>Zero Stars</h1>
            <h4>You are better than your negative reviews.</h4>
        </div>
        <SearchBar getReviews={getReviews}/>
        <Results reviews={reviews}/>
    </div>
  );
};

export default Homepage;
