"use client";

import React, { Fragment } from "react";
import { CardProps } from "./index";
import { motion } from "framer-motion";
import DropIndicator from "./DropIndicator";

const Card = ({ column, title, handleDragStart, id }: CardProps) => {
  return (
    <Fragment>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </Fragment>
  );
};

export default Card;
