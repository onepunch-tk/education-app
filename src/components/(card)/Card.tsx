import { Title } from "./Title.tsx";
import { Footer } from "./Footer.tsx";

interface CardProps {
  title: string;
  price: string;
  length: string;
}
export function Card({ title, price, length }: CardProps) {
  return (
    <div>
      <Title title={title} />
      <Footer price={price} length={length} />
    </div>
  );
}
