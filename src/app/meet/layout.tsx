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
      <main className="flex flex-1 justify-center items-center gap-20">
        {children}
      </main>
    </>
  );
}
