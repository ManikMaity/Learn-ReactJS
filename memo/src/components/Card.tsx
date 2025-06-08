import { useEffect } from "react";

export default function Card() {
  useEffect(() => {
    console.log("Card mounted");
  });
  return <div className="card">Card</div>;
}
