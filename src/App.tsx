import React from "react";
import Counter from "./Counter";
import "./App.css";

interface Props {
  title: string;
}

const App: React.FC<Props> = ({ title }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <Counter>
          {(count, increment, decrement, reset) => (
            <div>
              <p>{count}</p>
              <button onClick={increment}>+</button>
              <button onClick={decrement}>-</button>
              <button onClick={reset}>reset</button>
            </div>
          )}
        </Counter>
      </header>
    </div>
  );
};

export default App;
