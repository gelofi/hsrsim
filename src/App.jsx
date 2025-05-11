import './App.css';

// Main Elements
import Ripples from './sections/Hero/Ripples/Ripples'; // BACKGROUND
import Hero from './sections/Hero/Hero'; // Welcome Screen
import Usage from './sections/Hero/Usage/Usage'; // Instruction
import Button from './sections/Button/Button.module.css';
import Footer from './sections/Footer/Footer'; // Credits

// SPD Simulator
import Simulate from './sections/Simulate/Simulate';

// listener
import { useState } from 'react';

function App() {

  // click listener
  const [ Intro, showIntro ] = useState(true);
  const handleClick = () => showIntro((Intro) => !Intro)

  return <>
    <Ripples/>
    {Intro ? <Hero/> : <Simulate/>}
    <section id="button" className={Button.container}>
      <div className={Button.button}>
      <button onClick={handleClick}><a>{Intro ? 'Simulate' : 'Back'}</a></button>
    </div>
    </section>
    
    <Usage/>
    <Footer/>
    </>
}

// this is the HOMEPAGE

export default App;
