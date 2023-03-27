import React, { useState } from 'react';
import SearchBar from '../components/SearchBar.js';
import Results from '../components/Results.js';
import Navbar from '../components/Navbar.js';

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
        <Navbar />
        <section className='header bg-dark text-light p-5 text-center'>
          <div className='container bd-dark'>
            <div className='container mb-5'> 
                <h1>Zero Stars</h1>
                <h4>Monitor your negative reviews.</h4>
            </div>
            {/* </section>
            <section className='header bg-dark text-light p-5 text-center'> */}
            <SearchBar getReviews={getReviews}/>
            <Results reviews={reviews}/>
            </div>
          </section>
        
    </div>
  );
};

export default Homepage;
