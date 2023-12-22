import { cardFakeData } from "../db/card-fake-db.ts";
import { Card } from "./(card)/Card.tsx";

export function CardWrapper() {
  return (
    <div>
      {cardFakeData.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          price={data.price}
          length={data.length}
        />
      ))}
    </div>
  );
}
