import { useState } from 'react';
import './App.css';
import PollOption from './PollOption';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';

function App() {
  const [options, setOptions] = useState([
    { option: 'Dog', count: 0 },
    { option: 'Cat', count: 0 },
    { option: 'Rat', count: 0 },
  ]);

  const handleVote = (index) => {
    const newOptions = [...options];
    newOptions[index].count += 1;
    setOptions(newOptions);
  };

  const getLeader = () => {
    const max = Math.max(...options.map((o) => o.count));
    const leader = options.find((o) => o.count === max);
    return leader ? `${leader.option.toLowerCase()}: ${leader.count}` : 'No votes yet';
  };

  return (
    <div className="container">
      <div className="logos">
        <img src={viteLogo} alt="Vite Logo" className="logo" />
        <img src={reactLogo} alt="React Logo" className="logo" />
      </div>
      <h1>Vite + React</h1>

      <div className="count-box">
        count: {options.reduce((sum, o) => sum + o.count, 0)}
      </div>

      <div className="options">
        {options.map((item, index) => (
          <PollOption
            key={index}
            label={item.option}
            count={item.count}
            onVote={() => handleVote(index)}
          />
        ))}
      </div>

      <h2 className="leader">{getLeader()}</h2>
    </div>
  );
}

export default App;