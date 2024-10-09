"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { GiCheckeredFlag } from "react-icons/gi";

import { IoChevronDownOutline } from "react-icons/io5";
import { userMenuItems } from "../data";
import { Fragment } from "react";
import MenuResource from "./userMenu/MenuResource";
import { logoutAction } from "@/actions/auth";
const UserMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none ring-transparent">
          <div className="flex items-center hover:bg-slate-100 rounded-md p-1 justify-center gap-2 text-sm">
            <Avatar className="size-7">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex gap-1 items-center">
              shoubj <IoChevronDownOutline />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-3 text-sm min-w-[280px] p-2 overflow-visible">
          <div className="flex p-2  items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <span className="text-lg text-amber-600">
                <GiCheckeredFlag />
              </span>
              <div className="">
                <h1 className="text-base font-semibold">shbouj ahmed</h1>
                <h3 className="text-xs">0/5 tasks</h3>
              </div>
            </div>
            <span className="text-zinc-500">O then P</span>
          </div>
          <Separator />
          <div>
            {userMenuItems.map(({ sec }, i) => (
              <Fragment key={i}>
                <ul className="">
                  {sec.map((item, i) => (
                    <li
                      key={i}
                      onClick={async () =>
                        item.text === "Logout" ? await logoutAction() : ""
                      }
                      className=" group flex p-2 items-center justify-between hover:bg-zinc-100 rounded-md cursor-pointer"
                    >
                      <div className="flex items-center justify-start gap-2">
                        <span>
                          <item.icon />
                        </span>
                        <h3>{item.text}</h3>
                      </div>
                      <span className="text-sm text-zinc-500">
                        {item.shortCut ?? ""}
                      </span>
                      {item.extra && (
                        <MenuResource items={item.extra.items}>
                          <span>
                            <item.extra.icon />
                          </span>
                        </MenuResource>
                      )}
                    </li>
                  ))}
                </ul>
                {userMenuItems.length !== i + 1 && <Separator />}
              </Fragment>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserMenu;
