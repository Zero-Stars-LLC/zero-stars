import React, { useState } from 'react';

const SearchBar = (props) => {
  // Set component level state to handle place Id
  const [placeId, setPlaceId] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('button clicked!')
    console.log(placeId)
    // Handle incomplete submissions
    if (!placeId) {
      alert('Please add Place ID');
      return;
    }
    props.getReviews(placeId);

    // Reset state
    setPlaceId('');
  };

  return (
    <div className='SearchBar'>
      <form className='SearchBarForm' onSubmit={onSubmit}>
        <div>
        <label>Enter Your Place ID: </label>
        <input
          type='text'
          onChange={(e) => setPlaceId(e.target.value)}
        />
        </div>
      <br></br>
      <input id='submitForm' type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default SearchBar;
