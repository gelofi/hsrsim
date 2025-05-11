import styles from './Simulate.module.css';
import React, { useState, useEffect } from 'react';

function Simulate() {
  const [number, setNumber] = useState('');
  const [selected, setSelected] = useState('');
  const [characters, setCharacters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [simulationStarted, setSimulationStarted] = useState(false);

  // Character List
  const characterOptions = [
    "Acheron", "Aglaea", "Anaxa", "Argenti", "Arlan", "Asta", "Aventurine", "Bailu", "Black Swan", "Blade", "Boothill",
    "Bronya", "Castorice", "Cipher", "Clara", "Dan Heng", "Dr. Ratio", "Feixiao", "Firefly", "Fugue", "Fu Xuan", "Gallagher",
    "Gepard", "Guinaifen", "Hanya", "Herta", "Himeko", "Hook", "Huohuo", "Hyacine", "Imbibitor Lunae", "Jade",
    "Jiaoqiu", "Jing Yuan", "Jingliu", "Kafka", "Lingsha", "Luka", "Luocha", "Lynx", "March 7th (Preservation)",
    "March 7th (The Hunt)", "Misha", "Moze", "Natasha", "Pela", "Qingque", "Rappa", "Robin", "Ruan Mei",
    "Sampo", "Seele", "Serval", "Silver Wolf", "Sparkle", "Sunday", "Sushang", "The Herta", "Tingyun",
    "Topaz", "Trailblazer (Destruction)", "Trailblazer (Preservation)", "Trailblazer (Harmony)",
    "Trailblazer (Remembrance)", "Tribbie", "Welt", "Xueyi", "Yanqing", "Yukong", "Yunli"
  ];

  const handleAddCharacter = () => {
    const spd = parseInt(number, 10);

    if (!selected) {
      alert("Please select a character.");
      return;
    }

    if (isNaN(spd) || spd <= 80 || spd > 300) {
      alert("Please enter a whole number between 80 and 300.");
      return;
    }

    if (characters.find((char) => char.name === selected)) {
      alert("Character is already in team.");
      return;
    }

    if (characters.length >= 4) {
      alert("You can only add up to 4 characters.");
      return;
    }

    const av = Math.round(10000 / spd);
    const newChar = {
      name: selected,
      spd,
      av,
      timeLeft: 5,
      hasActed: false,
    };

    const updatedList = [...characters, newChar];

    if (updatedList.length === 4) {
      updatedList.sort((a, b) => a.av - b.av);
      setCharacters(updatedList);
      setSimulationStarted(true);
      setCurrentIndex(0);
    } else {
      setCharacters(updatedList);
    }

    setNumber('');
    setSelected('');
  };

  useEffect(() => {
    if (!simulationStarted || currentIndex === -1 || currentIndex >= characters.length) return;

    const interval = setInterval(() => {
      setCharacters(prev => {
        const updated = [...prev];
        const char = updated[currentIndex];

        if (char.hasActed) return updated;

        char.timeLeft -= 1;

        if (char.timeLeft <= 0) {
          char.timeLeft = 0;
          char.hasActed = true;
          alert(`${char.name}'s turn ended!`);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }

        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [simulationStarted, currentIndex, characters.length]);

  const availableOptions = characterOptions.filter(
    (char) => !characters.some((c) => c.name === char)
  );

  return (
    <section id="about" className={styles.container}>
      <div>
        <h1>Add a character's SPD</h1>
        <p>You can add up to 4 characters. They will act based on their Action Value. <br/><br/></p>

        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          <option value="">Select a character</option>
          {availableOptions.map((char) => (
            <option key={char} value={char}>{char}</option>
          ))}
        </select>

        <br /><br />

        <input
          type="number"
          step="1"
          max="300"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter SPD (e.g. 100–300)"
        />

        <br /><br />

        <button onClick={handleAddCharacter} disabled={characters.length >= 4}>
          Add
        </button>
      </div>

      <div className={styles.characterGrid}>
        {characters.map((char, index) => (
          <div key={index} className={styles.characterCard}>
            <h2>{char.name}</h2><br />
            <p>SPD: {char.spd}<br />
            AV: {char.av}<br />
            Time left: {char.timeLeft}s</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Simulate;
