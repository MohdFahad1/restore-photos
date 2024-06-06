"use client";

import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import toast from "react-hot-toast";

const Input = () => {
  const onUploadSuccessHandler = () => {
    toast.success("Image uploaded successfully");
  };

  const onUploadErrorHandler = () => {
    toast.error("Something went wrong");
  };

  return (
    <>
      <div className="mt-5">
        <CldUploadWidget
          uploadPreset="restore_photos"
          options={{
            multiple: false,
            resourceType: "image",
          }}
          onSuccess={onUploadSuccessHandler}
          onError={onUploadErrorHandler}
        >
          {({ open }) => (
            <div>
              <h3 className="text-2xl font-bold">Original</h3>
              <div
                onClick={() => open()}
                className="flex flex-col gap-4 justify-center items-center bg-gray-200 mt-5 rounded-xl h-[400px] w-[300px]"
              >
                <span className="bg-blue-500 rounded-md text-white text-3xl font-bold px-3 py-1 cursor-pointer">
                  +
                </span>
                <p>Click here to upload image</p>
              </div>
            </div>
          )}
        </CldUploadWidget>
      </div>
    </>
  );
};

export default Input;
