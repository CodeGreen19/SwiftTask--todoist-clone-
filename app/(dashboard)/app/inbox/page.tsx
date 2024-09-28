"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

const InboxPage = () => {
  const { status, data, update } = useSession();

  useEffect(() => {
    update();
  }, []);
  return (
    <div>
      Welcome to Dashboard !
      <div>
        {status === "loading" ? "loading..." : data?.user?.email ?? "null"}
      </div>
    </div>
  );
};

export default InboxPage;
