import './App.css';
import { useState } from 'react';

function Home() {

  const [selectedopt ,setSelectOpt] =useState('');
  const handleSelect = (e) =>{
    setSelectOpt(e.target.value)
  }
  const HandleSubmit = ()=>{

  }
  return (

    <div className="App">
      <div className="Main">
      <h2>Food App</h2>
      <div className="container">

        <div className="sub-container">
          <span>Name </span>
          <input className ="field" type="text"/>
        </div>
        <div className="sub-container">
        <span>Food Type </span>
        <select className ="field" value = {selectedopt} onChange= {handleSelect}>
          <option value = ""></option>
          <option value = "">Delicious Food</option>
          <option value = "">Nutritious Food </option>
          <option value = "">Fast Food </option>
          <option value = "">Desserts</option>

        </select>
        </div>

        <div>
          <span>Max Delivery Time </span>
          <input  className ="field" type="text"/>
        </div>
        <button onClick = {HandleSubmit} className = "btn">Submit</button>
    </div>
      </div>
    </div>
  );
}

export default Home;
