import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavMenuResource = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: Array<{ title: string; link: string }>;
}) => {
  return (
    <div>
      <NavigationMenu className="">
        <NavigationMenuList className="items-end">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-0 m-0 h-auto text-[1rem] font-normal">
              {children}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-40">
              <ul className="p-2 flex flex-col">
                {data.map((item) => (
                  <Link key={item.title} href={item.link}>
                    <li className="p-2 rounded-md hover:bg-slate-100">
                      {" "}
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavMenuResource;
