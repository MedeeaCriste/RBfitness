import React from "react";
import Link from "next/link";
export default function NavbarLinks() {
  return (
    <div className="flex flex-col bg-[#df6f71] lg:bg-white  lg:text-[#df6f71] lg:text-sm font-serif lg:relative lg:top-0 lg:flex-row lg:text-center p-4 lg:px-8 lg:shadow-none lg:justify-between lg:container lg:mx-auto lg:items-center gap-4 rounded-md absolute w-full left-0 top-20 text-white font-semibold">
      <Link className="hover:cursor-pointer" href="">About me</Link>
      <Link className="hover:cursor-pointer" href="">Personalised fitness training</Link>
      <Link className="hover:cursor-pointer" href="">Nutitional guidance</Link>
      <Link className="hover:cursor-pointer" href="">Psychological coaching</Link>
      <Link className="hover:cursor-pointer" href="">Mind-body workshops</Link>
      <Link className="hover:cursor-pointer" href="">Online programs and courses</Link>
    </div>
  );
}
