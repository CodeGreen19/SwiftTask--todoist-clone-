"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Heading from "../../_components/shared/Heading";
import AddTaskSections from "../../_components/inbox/AddTaskSections";

import { useQuery } from "@tanstack/react-query";
import { getAllTasks } from "@/actions/todo/task";

const InboxPage = () => {
  const { data, isPending } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      update();
      let data = await getAllTasks();
      return data;
    },
  });
  const { status, update } = useSession();

  if (isPending) {
    return <div>loading....</div>;
  }
  if (!data?.tasks) {
    return (
      <div className="text-red-500"> opps! don&apos;t have any data !</div>
    );
  }

  return (
    <div className="w-full">
      <Heading text="Inbox" />
      <AddTaskSections tasks={data?.tasks} />
    </div>
  );
};

export default InboxPage;
