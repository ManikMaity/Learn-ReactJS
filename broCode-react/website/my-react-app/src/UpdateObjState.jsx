import { useState } from "react";

function UpdateObjState() {
  const [car, setCar] = useState({
    year: 2024,
    make: "ford",
    model: "Mustang",
  });

  function handleYearChange (e) {
    setCar(c => ({...car, year : e.target.value}));
  }
  function handleMakeChange (e) {
    setCar(c => ({...car, make : e.target.value}))
  }
  function handleModelChange (e) {
    setCar(c => ({...car, model : e.target.value}))
  }

  return (<div className="card">
    <p>Your favorite car is {car.year} {car.make} {car.model}.</p>
    <input type="number" value={car.year} onChange={handleYearChange}/>
    <input type="text" value={car.make} onChange={handleMakeChange}/>
    <input type="text" value={car.model} onChange={handleModelChange}/>
  </div>);
}

export default UpdateObjState;
