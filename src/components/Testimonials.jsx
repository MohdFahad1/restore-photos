import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <section className="px-2 py-10 md:px-0">
      <figure className="mx-auto max-w-2xl border-4 border-black p-5 rounded-2xl">
        <h1 className="mb-4 text-4xl font-semibold text-black">
          What people are saying ?
        </h1>
        <blockquote className="mt-10 text-xl text-gray-900">
          <p>
            ImageFix.io makes photo restoration a breeze. The intuitive
            step-by-step process is perfect for users of all skill levels.
            Upload your photos, sit back, and watch as they&apos;re transformed
            into stunning, like-new images in no time. Highly recommended for
            anyone wanting to rejuvenate their cherished memories!”
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          <div className="isolate flex -space-x-2">
            <Image
              className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
              alt="Lee_Robinson"
              width={10}
              height={10}
            />
            <Image
              className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
              alt="Delba"
              width={10}
              height={10}
            />
            <Image
              className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
              alt="Lee_Robinson"
              width={10}
              height={10}
            />
            <Image
              className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
              alt="Delba"
              width={10}
              height={10}
            />
          </div>
          <div>
            <p className="font-semibold text-black">200+ customers</p>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
