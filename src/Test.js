import React, { useState } from 'react';
import './App.css';



const foodTypes = ['Delicious Food', 'Nutritious Food', 'Fast Food', 'Beverages', 'Desserts'];
const Test = () => {
  const [foodName, setFoodName] = useState('');
  const [foodType, setFoodType] = useState('');
  const [maxDeliveryTime, setMaxDeliveryTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      foodName,
      foodType,
      maxDeliveryTime,
    };

    const existingFoods = JSON.parse(localStorage.getItem('foods')) || [];
    existingFoods.push(newFood);
    localStorage.setItem('foods', JSON.stringify(existingFoods));

    setFoodName('');
    setFoodType('');
    setMaxDeliveryTime('');
  };

  return (
    <div className = "App">
        <div className="Main">
            <h1 className='title'>Food App</h1>
        <form className="container" onSubmit={handleSubmit}>
      <label>
        Food Name:
        <input className="field" type="text" value={foodName} onChange={(event) => setFoodName(event.target.value)} required />
      </label>
      <br />
      <label>
        Food Type:
        <select value={foodType} onChange={(event) => setFoodType(event.target.value)} required>
          <option className="field" value="">Select Food Type</option>
          {foodTypes.map((type) => (
            <option className="field" key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Max Delivery Time : 
        <input type="number" value={maxDeliveryTime} onChange={(event) => setMaxDeliveryTime(event.target.value)} required />
      </label>
      <br />
      <button className='btn' type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default Test;
