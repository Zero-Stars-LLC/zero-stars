import React, { useState } from 'react';
import SearchBar from '../components/SearchBar.js';
import Results from '../components/Results.js';
import Navbar from '../components/Navbar.js';

const Homepage = () => {
  // Set page level state to hold reviews receieved
  const [reviews, setReviews] = useState([]);
  const [received, setReceived] = useState(false);

  // Get reviews
  const getReviews = async (placeId) => {
    console.log('making fetch req')
    try {
      console.log(placeId)
      const res = await fetch(`/api/${placeId}`)
      const data = await res.json();
      if (data) {
        console.log('time: ', data.time)
        // Update state to the received array
        setReviews(data);
        setReceived(true);
        console.log('recieved: ', received)
      }
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className='bg-dark text-light'>
        <Navbar loggedIn={true}/>
        <section className='header bg-dark text-light p-5 text-center'>
          <div className='container bg-dark'>
            <div className='container mb-5'> 
                <h1>Zero Stars</h1>
                <h4>Monitor your negative reviews.</h4>
            </div>
            {/* </section>
            <section className='header bg-dark text-light p-5 text-center'> */}
            <SearchBar getReviews={getReviews}/>
            <Results received={received} reviews={reviews}/>
            </div>
          </section>
        
    </div>
  );
};

export default Homepage;
