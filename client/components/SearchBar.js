import React, { useState } from 'react';

const SearchBar = (props) => {
  // Set component level state to handle place Id
  const [placeId, setPlaceId] = useState('');

  const onSubmit = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    console.log('button clicked!');
    console.log(placeId);
    // Handle incomplete submissions
    if (!placeId) {
      alert('Please add a valid business name.');
      return;
    }
    props.getReviews(placeId);

    // Reset state
    setPlaceId('');
    e.target.value = '';
  };

  return (
    <div className="SearchBar container d-flex justify-content-center">
      <form
        className="SearchBarForm container align-items-center"
        onSubmit={onSubmit}
      >
        <div className="mx-auto" style={{ width: '30%', minWidth: '300px' }}>
          <label className="col-form-label">Enter Your Business Name: </label>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="e.g. Sarabeths Central Park"
              // style={{width: "50%"}}
              onChange={(e) => setPlaceId(e.target.value)}
            />
          </div>
        </div>
        <br></br>
        <input
          id="submitForm"
          className="btn btn-danger"
          type="submit"
          value="See My Reviews"
        />
      </form>
    </div>
  );
};

export default SearchBar;
