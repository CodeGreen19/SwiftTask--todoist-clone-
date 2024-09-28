import React from "react";

import { auth } from "@/auth";

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

const TodayPage = async () => {
  const data = await currentUser();

  return <div>{data?.email ?? "null"}</div>;
};

export default TodayPage;
