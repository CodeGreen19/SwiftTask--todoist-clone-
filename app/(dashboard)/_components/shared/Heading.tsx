"use client";

import { useScrollStore } from "@/hooks/useScrollStore";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

const Heading = ({ text, className }: { text: string; className?: string }) => {
  const { setShowNavText } = useScrollStore();

  return (
    <motion.div
      onViewportLeave={() => setShowNavText(text)}
      onViewportEnter={() => setShowNavText("")}
      className={cn("text-2xl my-3 font-bold", className)}
    >
      {text}
    </motion.div>
  );
};

export default Heading;
