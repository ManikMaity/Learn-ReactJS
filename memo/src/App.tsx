import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import MemozedCardContainer from "./components/CardsContainer";

export default function App() {
  useEffect(() => {
    console.log("App mounted");
  });

  const [count, setCount] = useState(0);
  const [changeColor, setChangeColor] = useState(false);

  const momoProps = useMemo(() => {
    return { color: changeColor ? "red" : "blue" };
  }, [changeColor]);

  function onCardContainerClick() {
    console.log("CardContainer clicked");
  }

  const onClickMemo = useCallback(onCardContainerClick, []);

  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <button onClick={() => setChangeColor(!changeColor)}>Change Color</button>
      <MemozedCardContainer
        color={momoProps}
        onCardContainerClick={onClickMemo}
      />
    </div>
  );
}
