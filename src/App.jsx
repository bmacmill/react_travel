import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from "../Components/Nav"
import TravelCard from "../Components/TravelCard"
import data from "../data.js"
import "./App.css"

export default function App() {
  const travelCards = data.map((item) => {
    return (
      <TravelCard key={item.title} {...item} />)
  })
  return (
    <div className="Container">

      <Nav />
      <section className="TravelCards">
        {travelCards}
      </section>

    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 