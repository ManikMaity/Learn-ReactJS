import { useEffect, useState } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#317a4c")

  useEffect(() => {
    document.title = `Count ${count}, Color ${color}`;
  }, [count,  color]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };
  
  const changeColor = () => {
    setColor(c => c == "#317a4c" ? "#453461" : "#317a4c");
  }

  return (
    <div style={{backgroundColor: color}} className="card">
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default UseEffectExample;
