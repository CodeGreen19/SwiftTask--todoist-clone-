import React, { Fragment } from "react";
import { navItems } from "../data";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import NavMenuResource from "./NavMenuResource";

const NavMenu = () => {
  return (
    <div className="flex items-center gap-4">
      <ul className="flex items-center justify-center gap-5">
        {navItems.map((item, i) => (
          <Link key={i} href={item.link ? item.link : ""}>
            <li className="px-4 py-2 hover:bg-slate-100 rounded-md">
              {item.title ? (
                item.title
              ) : (
                <NavMenuResource data={item.data!}>
                  {item.mainTitle}
                </NavMenuResource>
              )}
            </li>
          </Link>
        ))}
      </ul>

      <div className="border-l-2 pl-4 border-gray-300 space-x-3">
        {" "}
        <Button className="p-5 hover:bg-slate-200" variant={"secondary"}>
          Log in
        </Button>{" "}
        <Button className="p-5 hover:bg-amber-600  bg-signature">
          Start for free
        </Button>
      </div>
    </div>
  );
};

export default NavMenu;
