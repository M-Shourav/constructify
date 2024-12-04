import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
}
const Button = ({ href, className, children }: Props) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={twMerge(
            "px-4 py-2.5 md:py-4 rounded-sm flex items-center gap-1 text-base font-semibold bg-orange-500 hover:bg-black duration-300 border border-transparent hover:border-gray-300",
            className
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          className={twMerge(
            "px-4 py-2.5 md:py-4 rounded-sm flex items-center gap-1  text-base font-semibold  duration-300 border border-transparent hover:border-gray-300",
            className
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
