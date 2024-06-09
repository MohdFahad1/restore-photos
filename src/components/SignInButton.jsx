"use client";

import React from "react";
import { signIn, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  if (!session && !session.user) {
    return (
      <>
        <button onClick={() => signIn()}>Sign In With Google</button>
      </>
    );
  }
  return <div>SignInButton</div>;
};

export default SignInButton;
