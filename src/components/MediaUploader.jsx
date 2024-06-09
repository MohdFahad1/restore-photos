"use client";

import React, { useEffect, useState } from "react";
import { CldImage, CldUploadButton } from "next-cloudinary";
import toast from "react-hot-toast";
import { dataUrl } from "@/libs/utils";
import { download } from "@/libs/download";
import SignInButton from "./SignInButton";
import { useSession } from "next-auth/react";
// import Loader from "@/libs/loader";

const Input = () => {
  const { data: session } = useSession();
  const [resource, setResource] = useState();
  const [enhancement, setEnhancement] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const transformations = {};

  if (enhancement === "restore") {
    transformations.restore = true;
  } else if (enhancement === "improve") {
    transformations.improve = true;
  }

  useEffect(() => {
    if (enhancement) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [enhancement]);

  const onUploadSuccessHandler = (results) => {
    setResource(results?.info);
    toast.success("Image uploaded successfully");
  };

  const onUploadErrorHandler = () => {
    toast.error("Something went wrong");
  };

  const handleDownload = () => {
    if (resource?.public_id) {
      const enhancementUrl =
        enhancement === "restore" ? "e_gen_restore" : "e_improve";
      const downloadUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${enhancementUrl}/c_limit,w_${resource.width}/f_auto/q_auto/${resource.public_id}?_a=BAVFB+DW0`;
      download(downloadUrl, "transformed_image");
    }
  };

  return (
    <div className="flex flex-col">
      {!session ? (
        <>
          <SignInButton />
        </>
      ) : (
        <div>
          <div className="mt-5 flex md:flex-row flex-col gap-5 md:gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-5">Original</h3>
              {resource?.public_id ? (
                <div className="cursor-pointer overflow-hidden rounded-[10px]">
                  <CldImage
                    src={resource.public_id}
                    alt="Uploaded"
                    className="object-cover rounded-[10px]"
                    width={330}
                    height={450}
                    placeholder={dataUrl}
                  />
                </div>
              ) : (
                <CldUploadButton
                  signatureEndpoint="/api/sign-cloudinary-params"
                  onSuccess={onUploadSuccessHandler}
                  onError={onUploadErrorHandler}
                  options={{
                    autoMinimize: true,
                  }}
                >
                  <div>
                    <div className="flex flex-col gap-4 justify-center items-center bg-gray-200  rounded-xl h-[400px] w-[300px] ">
                      <span className="bg-blue-500 rounded-md text-white text-3xl font-bold px-3 py-1 cursor-pointer">
                        +
                      </span>
                      <p>Click here to upload image</p>
                    </div>
                  </div>
                </CldUploadButton>
              )}
            </div>

            <div>
              <h1 className="text-2xl font-bold">Transformed</h1>
              {!resource?.public_id ? (
                <div className="flex flex-col gap-4 justify-center items-center bg-gray-200 mt-5 rounded-xl h-[400px] w-[300px]">
                  <p>Transformed Image</p>
                </div>
              ) : isLoading ? (
                <div
                  className={`flex justify-center items-center h-${resource.height} w-${resource.width} mt-5`}
                >
                  <div
                    className={`border-dotted border-[10px] border-blue-500 rounded-full h-12 w-12 animate-spin`}
                  ></div>
                </div>
              ) : (
                // <Loader />
                <CldImage
                  src={resource.public_id}
                  alt="Transformed Image"
                  className="object-cover rounded-[10px] mt-5"
                  width={330}
                  height={450}
                  {...transformations}
                  placeholder={dataUrl}
                />
              )}
            </div>
          </div>
        </div>
      )}
      <div className="flex md:flex-row flex-col justify-center md:gap-10 gap-5 mt-10">
        <button
          className="bg-black hover:bg-black/80 rounded-md px-6 py-3 text-white text-xl font-semibold"
          onClick={() => setEnhancement("restore")}
        >
          Restore
        </button>
        <button
          className="bg-black hover:bg-black/80 rounded-md px-6 py-3 text-white text-xl font-semibold"
          onClick={() => setEnhancement("improve")}
        >
          Improve
        </button>
        <button
          className="border-2 border-black hover:bg-gray-200 rounded-md px-6 py-3 text-xl font-semibold"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Input;
