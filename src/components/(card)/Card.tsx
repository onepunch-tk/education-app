import { Title } from "./Title.tsx";
import { Footer } from "./Footer.tsx";
import { tv } from "tailwind-variants";
import { cls } from "../../utils/helpers.ts";

interface CardProps {
  title: string;
  price: string;
  length: string;
  className: string;
  id: number;
}

const card = tv({
  variants: {
    bgColor: {
      first: "bg-gray-700",
      second: "bg-neutral-200",
      third: "bg-amber-100",
      fourth: "bg-purple-400",
      fifth: "bg-rose-200",
      sixth: "bg-emerald-200",
    },
    titleColor: {
      first: "text-neutral-300",
      default: "text-neutral-900",
    },
    border: {
      first: "border-2 border-neutral-400",
    },
  },
});

const getBgColor = (id: number) => {
  switch (id) {
    case 1:
      return card.variants.bgColor.first;
    case 2:
      return card.variants.bgColor.second;
    case 3:
      return card.variants.bgColor.third;
    case 4:
      return card.variants.bgColor.fourth;
    case 5:
      return card.variants.bgColor.fifth;
    case 6:
      return card.variants.bgColor.sixth;
    default:
      return null; // 기본값 혹은 기본 색상을 설정할 수 있습니다.
  }
};

const getTitleColor = (id: number) => {
  if (id === 1) {
    return card.variants.titleColor.first;
  }
  return card.variants.titleColor.default;
};

const getBorder = (id: number) => {
  if (id === 1) {
    return card.variants.border.first;
  }
  return null;
};

export function Card({ title, price, length, className, id }: CardProps) {
  return (
    <div className={cls(className, getBgColor(id), getBorder(id))}>
      <Title
        className={cls(
          "text-[24px] font-semibold leading-normal",
          getTitleColor(id)
        )}
        title={title}
      />
      <Footer className="flex justify-between" price={price} length={length} />
    </div>
  );
}
