"use client";

import { cn } from "@/lib/utils";
import React, {
  Dispatch,
  DragEvent,
  Fragment,
  SetStateAction,
  useState,
} from "react";
import { motion } from "framer-motion";

let base_info = [
  {
    id: "1",
    title: "this is title 1",
    section: "1",
  },
  {
    id: "2",
    title: "this is title 2",
    section: "1",
  },
  {
    id: "3",
    title: "this is title 3",
    section: "2",
  },
  {
    id: "4",
    title: "this is title 4",
    section: "1",
  },
  {
    id: "5",
    title: "this is title 5",
    section: "2",
  },
  {
    id: "6",
    title: "this is title 6",
    section: "2",
  },
  {
    id: "7",
    title: "this is title 7",
    section: "2",
  },
];

const TestingPag = () => {
  const [data, setData] = useState(base_info);

  // section data
  const sec1 = data.filter((item) => item.section === "1");
  const sec2 = data.filter((item) => item.section === "2");

  return (
    <div className="p-7 min-h-screen flex gap-3 w-full">
      <Column sec={sec1} data={data} setData={setData} />
      <Column sec={sec2} data={data} setData={setData} />
    </div>
  );
};

export default TestingPag;

export const Column = ({
  sec,
  data,
  setData,
}: {
  sec: { id: string; title: string; section: string }[];
  data: { id: string; title: string; section: string }[];
  setData: Dispatch<
    SetStateAction<
      {
        id: string;
        title: string;
        section: string;
      }[]
    >
  >;
}) => {
  const [active, seTactive] = useState(false);
  // drag handlers
  const handleDragLeave = () => {
    seTactive(false);
  };
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    seTactive(true);
  };
  const handleDragStart = (e: DragEvent, id: string) => {
    e.dataTransfer?.setData("id", id);
  };

  // drop handler
  const handleDrop = (e: DragEvent) => {
    seTactive(false);
    // indicator
    let indicators = indicator();
    const DISTANCE_OFFSET = 50;

    const { element, offset } = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        console.log("box", box);

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);
        console.log(e.clientY);

        console.log("ofset", offset);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    const before = element.dataset.before || "-1";

    // copy
    let copy = [...data];
    let id = e.dataTransfer.getData("id");
    let itemToTransfer = copy.find((item) => item.id === id);
    if (itemToTransfer === undefined) return;
    itemToTransfer = { ...itemToTransfer, section: sec[0].section };

    const moveToBack = before === "-1";
    copy = copy.filter((item) => item.id !== id);
    if (moveToBack) {
      copy.push(itemToTransfer);
    } else {
      const insertAtIndex = copy.findIndex((el) => el.id === before);
      if (insertAtIndex === undefined) return;

      copy.splice(insertAtIndex, 0, itemToTransfer);
    }
    setData(copy);
  };

  const indicator = () => {
    return Array.from(
      document.querySelectorAll(
        `[data-column="${sec[0].section}"]`
      ) as unknown as HTMLElement[]
    );
  };
  return (
    <div
      className={cn("grow min-h-[50vh]", active && "bg-slate-200")}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <h1 className="mb-2">section</h1>
      <Card handleDragStart={handleDragStart} sec={sec} />
    </div>
  );
};

type CardType = {
  sec: { id: string; title: string; section: string }[];
  handleDragStart: Function;
};
const Card = ({ sec, handleDragStart }: CardType) => {
  return (
    <>
      {sec.map((item, i) => (
        <Fragment key={item.id}>
          <DropDownIndicator section={sec[0].section} beforeId={item.id} />
          <motion.div
            layout
            layoutId={item.id}
            draggable="true"
            onDragStart={(e) => {
              handleDragStart(e, item.id);
            }}
            key={i}
            className={cn(
              "cursor-grab text-white rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
            )}
          >
            {item.title}
          </motion.div>
        </Fragment>
      ))}
      <DropDownIndicator section={sec[0].section} />
    </>
  );
};

const DropDownIndicator = ({
  beforeId,
  section,
}: {
  beforeId?: string;
  section: string;
}) => {
  return (
    <div
      data-column={section}
      data-before={beforeId || "-1"}
      className="h-1 w-full my-1 bg-purple-200"
    ></div>
  );
};
