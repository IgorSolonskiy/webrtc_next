import React from "react";

import { Header } from "@/widgets/header";
import { signInNavigation } from "@/shared/constants";

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header navigations={signInNavigation} />
      <main className="flex flex-1 items-center justify-center">
        {children}
      </main>
    </>
  );
}
