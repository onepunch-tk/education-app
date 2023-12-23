interface MenuProps {
  title: string;
  className: string;
  onClick(): void;
}
export function Menu({ title, className, onClick }: MenuProps) {
  return (
    <li onClick={onClick} className={className}>
      {title}
    </li>
  );
}
