"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SignOutButton from "./SignOutButton";

export default function Navbar() {
  return (
    <div className="relative w-full bg-white text-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 border-b-2">
        <Link
          href={"/"}
          className="inline-flex items-center space-x-2 cursor-pointer"
        >
          <span>
            <Image src="/logo.png" alt="logo" height={50} width={50} />
          </span>
          <span className="font-bold">restorePhotos</span>
        </Link>
        <div className="flex gap-2 md:gap-5 text-md md:text-xl font-semibold">
          <Link href={"/"} className="hover:text-blue-500 duration-100">
            Home
          </Link>
          |
          <Link href={"/restore"} className="hover:text-blue-500 duration-100">
            Restore
          </Link>
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
