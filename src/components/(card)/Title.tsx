interface CardTitleProps {
  title: string;
}

export function Title({ title }: CardTitleProps) {
  return <h2>{title}</h2>;
}
