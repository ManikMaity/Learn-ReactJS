import { memo, useEffect } from "react";
import Card from "./Card";

function CardContainer({
  color,
  onCardContainerClick,
}: {
  color: {
    color: string;
  };
  onCardContainerClick: () => void;
}) {
  useEffect(() => {
    console.log("CardContainer mounted");
  });

  return (
    <div
      style={{ backgroundColor: color.color }}
      onClick={onCardContainerClick}
    >
      <h1>Card Container</h1>
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <Card key={i} />
        ))}
    </div>
  );
}

const MemozedCardContainer = memo(CardContainer);

export default MemozedCardContainer;
