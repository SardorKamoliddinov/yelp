import React, { useState } from 'react';
import { API } from 'aws-amplify';
import awsconfig from './aws-exports';
import './Yelp.css';

function Yelp() {
  const [restaurant, setRestaurant] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: restaurant,
      description: description,
      city: city,
    };
    console.log(data); // Log the form input data as an object to the console
    setRestaurants([...restaurants, data]); // Add the new restaurant to the list of restaurants
    setRestaurant('');
    setDescription('');
    setCity('');
  }

  function handleDelete(index) {
    const updatedRestaurants = [...restaurants];
    updatedRestaurants.splice(index, 1);
    setRestaurants(updatedRestaurants);
  }

  return (
    <div className="yelp">
      <form onSubmit={handleSubmit}>
        <label>
          Restaurant:
          <input
            type="text"
            value={restaurant}
            onChange={(e) => setRestaurant(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="crt">
          Create
        </button>
      </form>
      <div className="card-list">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="card">
            <h3>{restaurant.name}</h3>
            <p className="des">{restaurant.description}</p>
            <p className="city">{restaurant.city}</p>
            <button onClick={() => handleDelete(index)} className="del">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Yelp;