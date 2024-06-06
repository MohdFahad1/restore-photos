import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="relative overflow-hidden bg-white py-8 border-t-2 mx-auto flex max-w-7xl text-black">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-auto p-8">
            <div className="inline-flex items-center">
              <span className="ml-4 text-lg font-medium">
                Powered by{" "}
                <Link
                  href={"/https://cloudinary.com/"}
                  className="font-bold hover:text-gray-700"
                >
                  Cloudinary
                </Link>
                . Created by <b>Mohd Fahad</b>.
              </span>
            </div>
          </div>
          <div className="w-auto md:p-8">
            <div className="-m-1.5 flex flex-wrap">
              <div className="w-auto p-1.5">
                <Link
                  href={"https://github.com/MohdFahad1/restore-photos"}
                  target="_blank"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <Image
                      src={"/github.png"}
                      alt="github"
                      height={30}
                      width={30}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
