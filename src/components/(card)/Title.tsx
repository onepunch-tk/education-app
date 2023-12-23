interface CardTitleProps {
  title: string;
  className: string;
}

export function Title({ title, className }: CardTitleProps) {
  return <h2 className={className}>{title}</h2>;
}
