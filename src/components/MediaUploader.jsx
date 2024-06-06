"use client";

import React, { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import toast from "react-hot-toast";

const Input = () => {
  const [resource, setResource] = useState();
  const onUploadSuccessHandler = (results, { widget }) => {
    setResource(results?.info);
    toast.success("Image uploaded successfully");
    widget.close();
  };

  const onUploadErrorHandler = () => {
    toast.error("Something went wrong");
  };

  return (
    <>
      <div className="mt-5">
        <h3 className="text-2xl font-bold mb-5">Original</h3>
        {resource?.public_id ? (
          <div className="cursor-pointer overflow-hidden rounded-[10px]">
            <CldImage
              width="300"
              height="400"
              src={resource.public_id}
              alt="Uploaded"
            />
          </div>
        ) : (
          <CldUploadWidget
            uploadPreset="restore_photos"
            options={{
              multiple: false,
              resourceType: "image",
            }}
            onSuccess={onUploadSuccessHandler}
            onError={onUploadErrorHandler}
          >
            {({ open }) => {
              function handleOnClick() {
                setResource(undefined);
                open();
              }
              return (
                <div>
                  <div
                    onClick={handleOnClick}
                    className="flex flex-col gap-4 justify-center items-center bg-gray-200 mt-5 rounded-xl h-[400px] w-[300px]"
                  >
                    <span className="bg-blue-500 rounded-md text-white text-3xl font-bold px-3 py-1 cursor-pointer">
                      +
                    </span>
                    <p>Click here to upload image</p>
                  </div>
                </div>
              );
            }}
          </CldUploadWidget>
        )}
      </div>
    </>
  );
};

export default Input;
