import { PropsWithChildren } from "react";

interface HeaderListProps extends PropsWithChildren {
  className: string;
}

export function HeaderList({ children, className }: HeaderListProps) {
  return <ul className={className}>{children}</ul>;
}
