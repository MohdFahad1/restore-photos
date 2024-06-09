"use client";

import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const SignOutButton = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleImageClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = () => {
    signOut();
    setShowDropdown(false);
  };

  return (
    <div>
      {session ? (
        <div className="relative">
          <div
            onClick={handleImageClick}
            className="flex justify-center items-center"
          >
            <Image
              src={session.user?.image}
              height={40}
              width={40}
              className="h-[40px] w-[40px] rounded-full cursor-pointer"
              alt="User Image"
            />
          </div>
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10 text-sm">
              <h1 className="block w-[130px] px-4 py-2 text-left hover:bg-gray-100">
                {session.user?.name}
              </h1>
              <button
                onClick={handleSignOut}
                className="block w-[130px] px-4 py-2 text-left bg-red-500 rounded-b-md text-white hover:bg-red-600"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default SignOutButton;
