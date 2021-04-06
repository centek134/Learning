import './App.css';
import sedan from './img/icon-sedans.svg';
import suv from './img/icon-suvs.svg';
import luxury from './img/icon-luxury.svg';

function App() {
  return (
    <section className = "wrapper-box">
    <article className = "box one">
          <img src = {sedan} alt = {"sedan"}/>
          <h1>SEDANS</h1>
          <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
          <button>Learn More</button>
    </article>
    <article className = "box two">
        <img src = {suv} alt = {"suv"}/>
        <h1>SUVS</h1>
        <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures</p>
        <button>Learn More</button>
    </article>
    <article className = "box three">
        <img src = {luxury} alt = {"luxury"}/>
        <h1>LUXURY</h1>
        <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
        <button>Learn More</button>
    </article>
</section>
  );
}

export default App;
