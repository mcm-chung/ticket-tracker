//import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Card from "./Components/Card";
import Data from "./Components/data/teams";

// Map over the data file below to create the components
// Pass data into them via props
// Use State to handle the increment and decrement of tickets.
// Style it.

const App = () => {
  const [name, role, score, setCardScore] = useState();

  return (
    <div className="App">
      <Card
        cardName={name}
        cardRole={role}
        score={score}
        handleClick={setCardScore}
      />
    </div>
  );
};

export default App;
