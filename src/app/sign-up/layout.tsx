import React from "react";

import { Header } from "@/widgets/header";
import { signUpNavigation } from "@/shared/constants";

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header navigations={signUpNavigation} />
      <main className="flex flex-1 items-center justify-center">
        {children}
      </main>
    </>
  );
}
