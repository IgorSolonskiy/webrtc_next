"use client";

import { Button } from "@/shared/ui";

export const LogoutButton = ({ onClick }) => {
  return <Button onClick={onClick} text="Logout" />;
};
