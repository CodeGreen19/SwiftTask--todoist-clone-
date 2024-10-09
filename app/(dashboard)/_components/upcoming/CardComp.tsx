"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import React from "react";
import { useRaisedShadow } from "./use-raise-shadow";

const CardComp = ({ item }: { item: string }) => {
  const dragControls = useDragControls();
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  // single dragControls for all items

  return (
    <Reorder.Item
      value={item}
      key={item}
      style={{ boxShadow, y }}
      className="rounded-lg"
      dragListener={false}
      dragControls={dragControls} // pass the drag controls
    >
      <Card className="bg-amber-100 p-4 shadow-none ">
        <CardHeader className="p-0">
          <CardTitle>this is the card no {item}</CardTitle>
        </CardHeader>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          non et saepe debitis laudantium temporibus, voluptatibus minima
          dolorem quos culpa cupiditate ad quae in dicta tenetur quibusdam
          consectetur esse neque.
          <Button
            className="cursor-move"
            onPointerDown={(e) => dragControls.start(e)} // individual item handler
          >
            Grab
          </Button>
        </CardDescription>
      </Card>
    </Reorder.Item>
  );
};

export default CardComp;
