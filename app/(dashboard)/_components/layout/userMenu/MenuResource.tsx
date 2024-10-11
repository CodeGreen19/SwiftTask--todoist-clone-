import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { IconType } from "react-icons/lib";

const MenuResource = ({
  children,
  items,
}: {
  children: React.ReactNode;
  items: {
    icon: IconType;
    text: string;
    visible: boolean;
  }[];
}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="p-0 h-auto">
            {children}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="right-0 md:w-full">
            <ul>
              {items.map((info) => (
                <li
                  key={info.text}
                  className="flex p-2 rounded-md hover:bg-slate-100 items-center justify-start gap-2 min-w-[200px]"
                >
                  <info.icon /> <h2>{info.text}</h2>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuResource;
