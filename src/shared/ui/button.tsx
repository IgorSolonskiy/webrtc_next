import Link from "next/link";

type ButtonProps = {
  variant: "button";
  text: string;
};

type LinkProps = {
  variant: "link";
  text: string;
  href: string;
};

type Props = ButtonProps | LinkProps;

export const Button = ({ variant, href, text }: Props) => {
  if (variant === "link") {
    return (
      <Link
        className="px-4 py-2 bg-sky-500/100 hover:bg-sky-600 rounded text-white"
        href={href}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      className="px-4 py-2 bg-sky-500/100 hover:bg-sky-600 rounded text-white"
      type="submit"
    >
      {text}
    </button>
  );
};
