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
import { Fragment, useRef } from "react";
import MenuResource from "./userMenu/MenuResource";
import { logoutAction } from "@/actions/auth";
import { useSession } from "next-auth/react";
import Settings from "./settings/Settings";
const UserMenu = () => {
  const { data } = useSession();
  const settingRef = useRef<HTMLSpanElement | null>(null);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none ring-transparent">
          <div className="flex items-center justify-center gap-2 rounded-md p-1 text-sm hover:bg-slate-100">
            {data?.user?.image ? (
              <Avatar className="size-7">
                <AvatarImage src={data.user.image} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ) : (
              <div className="mx-1 flex size-7 items-center justify-center rounded-full bg-zinc-300 font-bold">
                {data?.user?.name?.slice(0, 1)}
              </div>
            )}
            <div className="flex items-center gap-1">
              {data?.user?.name} <IoChevronDownOutline />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-3 min-w-[280px] overflow-visible p-2 text-sm">
          <div className="flex items-center justify-between p-2">
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
          <div className="">
            {userMenuItems.map(({ sec }, i) => (
              <Fragment key={i}>
                <ul className="">
                  {sec.map((item, i) => (
                    <li
                      key={i}
                      onClick={async () =>
                        item.text === "Logout"
                          ? await logoutAction()
                          : item.text === "Settings"
                            ? settingRef.current?.click()
                            : ""
                      }
                      className="group flex cursor-pointer items-center justify-between rounded-md p-2 hover:bg-zinc-100"
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
          {/* for settings  */}
          <Settings>
            <span ref={settingRef}></span>
          </Settings>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserMenu;
