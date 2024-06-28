import React from "react";

import { BasicHeader } from "@/widgets/header";
import { meetNavigation } from "@/shared/constants";

export default function MeetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BasicHeader navigations={meetNavigation} />
      <main className="flex flex-1 items-center justify-center">
        {children}
      </main>
    </>
  );
}
