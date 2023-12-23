import { tv } from "tailwind-variants";
import { cls } from "../../utils/helpers.ts";

interface CardFooterProps {
  price: string;
  length: string;
  className: string;
}

const footer = tv({
  base: "rounded-3xl border border-neutral-900 px-2.5 py-1 text-xs",
  variants: {
    bgColor: {
      lengthBtn: "bg-white",
      priceBtn: "bg-amber-300",
    },
  },
});

export function Footer({ price, length, className }: CardFooterProps) {
  return (
    <div className={className}>
      <span className={cls(footer({ bgColor: "priceBtn" }))}>{price}</span>
      <span className={cls(footer({ bgColor: "lengthBtn" }))}>{length}</span>
    </div>
  );
}
