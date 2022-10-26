import { useState } from "react";
import './App.css';

function App() {

  const [wasClicked, setWasClicked] = useState(false)
  const [excuse, setExcuse] = useState('')

  const fetchData = async (category) => {
    await fetch(`https://excuser.herokuapp.com/v1/excuse/${category}`)
      .then(res => res.json())
      .then(data => setExcuse(data[0].excuse))
    setWasClicked(true)
  }

  return (
    <div className="container">
        <h1>The Excusinator 3000</h1>
        <h2>Tired of coming up with excuses? I've got you covered!
        </h2>
        <h3>Click on a category to generate an excuse</h3>
        <div className="options">
          <button onClick={() => fetchData('family')}>
            Family
          </button>
          <button onClick={() => fetchData('office')}>
            Office
          </button>
          <button onClick={() => fetchData('college')}>
            College
          </button>
          <button onClick={() => fetchData('party')}>
            Party
          </button>
        </div>
      {wasClicked && <p>{excuse}</p>}
    </div>
  )
}

export default App;
