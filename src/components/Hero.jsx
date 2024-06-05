import Link from "next/link";
import React from "react";

export default function HeroThree() {
  return (
    <div className="relative w-full">
      <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
        <div className="flex justify-center items-center cursor-pointer">
          <p className="border-2 rounded-full w-auto px-5 py-2 text-gray-500 flex items-center gap-2 hover:scale-105 duration-300">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkle "
              >
                <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path>
              </svg>
            </span>
            Introducing restorPhotos.io
          </p>
        </div>
        <div className="relative mx-auto max-w-2xl pb-24 pt-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Restoring old photos{" "}
              <span className="text-blue-500">using AI</span> for everyone.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have old and blurry face photos? Let our AI restore them so those
              memories can live on. 100% free – restore your photos today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Explore
              </button>
              <Link href={"/restore"}>
                <button
                  type="button"
                  className="rounded-md border border-black px-3 py-2 text-lg font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-gray-200"
                >
                  Restore your Photos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
