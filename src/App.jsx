import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [today, setToday] = useState(new Date());
  const [delay, setDelay] = useState(0);
  const [second, setSecond] = useState(30);
  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
    }, 1);

    return () => clearInterval(timer);
  }, []);

  const date = today;
  date.setMilliseconds(date.getMilliseconds() + delay);
  if (date.getSeconds() == second) {
    document.body.style.backgroundColor = "red";
  }
  return (
    <div className="App">
      <div>
        {date.getHours()} : {date.getMinutes()} : {date.getSeconds()} :{" "}
        {date.getMilliseconds()}
      </div>
      <div>
        <input onChange={(e) => setDelay(+e.target.value)} />
        <input
          onChange={(e) => {
            setSecond(+e.target.value);
            document.body.style.backgroundColor = "white";
          }}
        />
      </div>
    </div>
  );
}

export default App;
