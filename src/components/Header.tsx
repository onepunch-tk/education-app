import { HeaderList } from "./(header)/HeaderList.tsx";
import { menuFakeData } from "../data/menu-fake-data.ts";
import { Menu } from "./(header)/Menu.tsx";
import { useState } from "react";
import { cls } from "../utils/helpers.ts";

export function Header() {
  const [selectedMenu, setSelectedMenu] = useState(menuFakeData[0]);
  return (
    <header className="flex justify-center text-neutral-300 text-sm">
      <HeaderList className="w-max flex justify-start gap-x-2 overflow-x-hidden hover:overflow-x-auto">
        {menuFakeData.map((menu, index) => (
          <Menu
            onClick={() => setSelectedMenu(menu)}
            key={index}
            title={menu.title}
            className={cls(
              "max-h-[40px] w-max min-w-max cursor-pointer rounded-3xl border-2 border-neutral-500 p-2 text-center transition-colors duration-300 hover:border-white hover:bg-white hover:text-neutral-900",
              selectedMenu.title === menu.title &&
                "border-white bg-white text-neutral-900"
            )}
          />
        ))}
      </HeaderList>
    </header>
  );
}
