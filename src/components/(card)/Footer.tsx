interface CardFooterProps {
  price: string;
  length: string;
}
export function Footer({ price, length }: CardFooterProps) {
  return (
    <div>
      <span>{price}</span>
      <span>{length}</span>
    </div>
  );
}
