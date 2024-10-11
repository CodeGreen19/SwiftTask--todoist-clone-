"use client";

import { useAddTask } from "@/app/(dashboard)/_hooks/useAddText";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { format } from "date-fns";
import React, { useRef } from "react";
import { CiLight } from "react-icons/ci";
import { IoTodayOutline } from "react-icons/io5";
import { MdDoNotDisturb, MdOutlineWeekend } from "react-icons/md";
import { nextDay, nextWeek, today } from "../../data/dateData";

const datePickerArr = [
  {
    icon: MdDoNotDisturb,
    iconColor: "text-red-500",
    text: "No Date",
    date: undefined,
  },
  {
    icon: IoTodayOutline,
    iconColor: "text-amber-500",
    text: "Today",
    date: today,
  },

  {
    icon: CiLight,
    iconColor: "text-blue-500",
    text: "Tomorrow",
    date: nextDay,
  },
  {
    icon: MdOutlineWeekend,
    iconColor: "text-purple-500",
    text: "Next Week",
    date: nextWeek,
  },
];

const DueDate = ({ children }: { children: React.ReactNode }) => {
  const { setDueDate } = useAddTask();
  const popoverCloseRef = useRef<HTMLButtonElement | null>(null);

  const handleDateSelect = (e: Date | undefined) => {
    if (e !== undefined) {
      setDueDate(e);
    }
    popoverCloseRef.current?.click();
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger className="outline-none">{children}</PopoverTrigger>
        <PopoverContent>
          <ul>
            {datePickerArr.map((item, i) => (
              <li
                key={i}
                onClick={() => handleDateSelect(item.date)}
                className="flex cursor-pointer text-sm items-center justify-between rounded-md p-1 px-2 hover:bg-amber-50"
              >
                <span className="flex font-normal items-center gap-2">
                  <item.icon className={item.iconColor} />
                  {item.text}
                </span>
                <span className="text-sm text-zinc-500">
                  {item.date === undefined ? "" : format(item.date, "iii")}
                </span>
              </li>
            ))}
          </ul>
          <Calendar
            className="text-sm"
            mode="single"
            disabled={{ before: today }}
            onSelect={handleDateSelect}
          />

          <PopoverClose className="block" ref={popoverCloseRef}></PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DueDate;
