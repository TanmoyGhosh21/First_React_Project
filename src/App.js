import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>Hi , Tanmoy </h1>
      <p>
        Advice Number <b>{count}</b> of the day is.
      </p>
      <h4>{advice}</h4>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}
