"use client";

import { Reorder } from "framer-motion";
import { useState } from "react";
import Heading from "../../_components/shared/Heading";
import CardComp from "../../_components/upcoming/CardComp";

const initialItems = [
  "first",
  "🍅 Tomato",
  "🥒 Cucumber",
  "🧀 Cheese",
  "🥬 Lettuce",
];

const UpcomingPage = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <div>
      <Heading text="Up coming" />
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="space-y-3"
      >
        {items.map((item) => (
          <CardComp key={item} item={item} />
        ))}
      </Reorder.Group>
    </div>
  );
};

export default UpcomingPage;
