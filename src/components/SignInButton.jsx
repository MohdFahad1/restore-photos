"use client";

import React from "react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

const SignInButton = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <div className="bg-gray-00 flex justify-center items-center border-dashed border-2 rounded-md h-[300px] px-5">
          <button
            onClick={() => signIn()}
            className="bg-blue-400 hover:bg-blue-500 rounded-md px-3 py-4 text-white text-xl font-semibold flex justify-center items-center gap-4"
          >
            <Image
              src={"/google.png"}
              width={40}
              height={40}
              className="h-[30px] w-[30px] object-cover"
            />
            Sign In With Google
          </button>
        </div>
      </>
    );
  }
  return <div>SignInButton</div>;
};

export default SignInButton;
