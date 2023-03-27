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
    <div className='SearchBar container d-flex justify-content-center'>
      <form className='SearchBarForm align-items-center mx-auto' onSubmit={onSubmit}>
        <div>
        <label className='col-form-label'>Enter Your Place ID: </label>
        <div>
          <input className='form-control'
            type='text'
            onChange={(e) => setPlaceId(e.target.value)}
          />
        </div>
        </div>
      <br></br>
      <input id='submitForm' className='btn btn-danger' type='submit' value='See My Reviews' />
      </form>
    </div>
  );
};

export default SearchBar;
