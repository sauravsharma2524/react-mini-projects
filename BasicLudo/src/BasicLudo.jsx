import { useState } from "react";

export default function BasicLudo() {
  let [move, setMove] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  let blueMove = () => {
    setMove({ ...move, blue: move.blue + 1 });
  };

  let yellowMove = () => {
    setMove({ ...move, yellow: move.yellow + 1 });
  };

  let greenMove = () => {
    setMove({ ...move, green: move.green + 1 });
  };

  let redMove = () => {
    setMove({ ...move, red: move.red + 1 });
  };

  return (
    <div>
      <h2>Game Begins!</h2>
      <p>Blue moves = {move.blue} </p>
      <button onClick={blueMove} style={{ backgroundColor: "blue" }}>
        +1
      </button>
      <p>Yellow moves = {move.yellow} </p>
      <button
        onClick={yellowMove}
        style={{ backgroundColor: "yellow", color: "black" }}
      >
        +1
      </button>
      <p>Green moves = {move.green} </p>
      <button onClick={greenMove} style={{ backgroundColor: "green" }}>
        +1
      </button>
      <p>Red moves = {move.red} </p>
      <button onClick={redMove} style={{ backgroundColor: "red" }}>
        +1
      </button>
    </div>
  );
}
