import React, { useState } from "react";

function App() {
  const [num, setNum] = useState("0");
  const [result, setResult] = useState("");

  function checkPrime() {
    let prime = true;

    if (num  <= 1) {
      
      prime = false;
    } else {

      for (let i = 2; i < num; i++) {
        if (num % i  === 0) {

          prime  = false;
          break;
        }

      }
    }
    if (prime) {
      setResult("Prime Number");
    } else {
      setResult("Not Prime Number");
    }
  }
  return (
    <div>
      <h2>Prime Number Checker</h2>

      <input
        type="number"
        onChange={  (e) =>    setNum(e.target.value)}
      />

      <br /><br />

      <button onClick={checkPrime}>
        Check
      </button>

      <h3>{result}</h3>
    </div>
  );
}

export default App;