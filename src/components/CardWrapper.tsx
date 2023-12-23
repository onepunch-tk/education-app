import { cardFakeData } from "../data/card-fake-data.ts";
import { Card } from "./(card)/Card.tsx";

export function CardWrapper() {
  return (
    <section className="grid grid-cols-2 mt-5 gap-2.5 [&>*:nth-child(3n)]:col-span-2">
      {cardFakeData.map((data, index) => (
        <Card
          key={index}
          {...data}
          className="bg-white py-3 px-2.5 space-y-5 rounded-2xl flex flex-col justify-between"
        />
      ))}
    </section>
  );
}
