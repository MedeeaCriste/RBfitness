import React from "react";
import { Button } from "@mantine/core";
import NavbarLinks from "./NavbarLinks";
import Link from "next/link";
export default function Header() {
  return (
    <div className="container p-4 md:p-8 mx-auto h-[100vh] lg:h-[90vh] 2xl:h-[93vh] flex flex-col justify-center gap-10">
        <div className="flex flex-col xl:gap-4">
          <h1 className="text-2xl font-light font-serif md:text-3xl 2xl:text-4xl">RB fitness</h1>
          <p className="text-3xl md:text-4xl font-semibold text-[#df6f71] 2xl:text-5xl font-serif ">Raluca Caine</p>
        </div>
        <p className="text-base font-serif md:text-lg lg:max-w-[600px] 2xl:max-w-[800px] 2xl:text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.{" "}
        </p>
        <Link href="">
          <Button variant="filled" color="#df6f71" className="max-w-40 xl:min-w-60 md:text-lg 2xl:text-2xl font-serif">
            Find out more
          </Button>
        </Link>
      </div>
  );
}
