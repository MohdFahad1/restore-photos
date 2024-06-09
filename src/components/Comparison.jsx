import Image from "next/image";
import React from "react";

const Comparison = () => {
  return (
    <>
      <section className="px-2 py-10 md:px-0 flex justify-center items-center mx-auto">
        <div className="mx-auto p-5 rounded-2xl flex md:gap-10 gap-5 flex-col md:flex-row">
          <div>
            <h1 className="text-xl font-semibold text-center mb-3">
              Original Photo
            </h1>
            <Image
              src={"/old.png"}
              alt="Old Rock"
              width={400}
              height={400}
              className="rounded-3xl object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-center mb-3">
              Restored Photo
            </h1>
            <Image
              src={"/new.png"}
              alt="New Rock"
              width={400}
              height={400}
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Comparison;
