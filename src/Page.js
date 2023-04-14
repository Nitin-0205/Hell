import React, { useState, useEffect } from 'react';
import "./App.css"
const foodTypes = ['All', 'Delicious Food', 'Nutritious Food', 'Fast Food', 'Beverages', 'Desserts'];

const Page = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [foodTypeFilter, setFoodTypeFilter] = useState('All');
  const [deliveryTimeFilter, setDeliveryTimeFilter] = useState('');
  
  useEffect(() => {
    const existingFoods = JSON.parse(localStorage.getItem('foods')) || [];
    setFoods(existingFoods);
    console.log(existingFoods)
    setFilteredFoods(existingFoods);
  }, []);

  useEffect(() => {
    let filteredFoods = foods;

    if (foodTypeFilter !== 'All') {
      filteredFoods = filteredFoods.filter((food) => food.foodType === foodTypeFilter);
    }

    if (deliveryTimeFilter !== '') {
      filteredFoods = filteredFoods.filter((food) => food.maxDeliveryTime <= deliveryTimeFilter);
    }

    setFilteredFoods(filteredFoods);
  }, [foods, foodTypeFilter, deliveryTimeFilter]);

  return (
    <div>
    <div className='PageCon'>

    
    <div >
     <label>Food Type</label>
     <br></br>
        <select value={foodTypeFilter} onChange={(event) => setFoodTypeFilter(event.target.value)} required>
          <option className="field" value="">Select Food Type</option>
          {foodTypes.map((type) => (
            <option className="field" key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
     </div>

     <div >
        <label>Max Food Time </label>
        <br/>
        <input type = "number" value={deliveryTimeFilter} onChange={(event) => setDeliveryTimeFilter(event.target.value)}></input>
     </div>
     


    </div>
    <div className='con'>
        { 
            foods.map((data)=>{

                return(<div className='box'>
                <h1>{data.foodName}</h1>
                <h3>{data.foodType}</h3>

                <h3>{data.maxDeliveryTime}</h3>

            </div>)


            })
        }
    </div>
    </div>


  )

}
export default Page;
