import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export const TextField = ({ id, ...props }: Props) => {
  return (
    <input
      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 hover:ring-sky-500/100 sm:text-sm sm:leading-6"
      type="text"
      id={id}
      {...props}
    />
  );
};
