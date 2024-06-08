import { randomUUID } from "crypto";

export const homeNavigation = [
  {
    id: randomUUID(),
    text: "Sign in",
    href: "/sign-in",
  },
  {
    id: randomUUID(),
    text: "Sign up",
    href: "/sign-up",
  },
];

export const signUpNavigation = [
  {
    id: randomUUID(),
    text: "Home",
    href: "/",
  },
  {
    id: randomUUID(),
    text: "Sign in",
    href: "/sign-in",
  },
];

export const signInNavigation = [
  {
    id: randomUUID(),
    text: "Home",
    href: "/",
  },
  {
    id: randomUUID(),
    text: "Sign up",
    href: "/sign-up",
  },
];
