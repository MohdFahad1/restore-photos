"use client";

import React, { useEffect, useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import toast from "react-hot-toast";

const Input = () => {
  const [resource, setResource] = useState();
  const [transformedImageUrl, setTransformedImageUrl] = useState();

  const transormations = {};

  const handleRestore = () => {
    try {
      transormations.restore = true;
      transormations.improve = true;
    } catch (error) {
      toast.error("Upload an image first");
    }
  };

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
      <div className="mt-5 flex md:flex-row flex-col gap-5 md:gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-5">Original</h3>
          {resource?.public_id ? (
            <div className="cursor-pointer overflow-hidden rounded-[10px]">
              <CldImage
                src={resource.public_id}
                alt="Uploaded"
                className="w-full h-full object-cover rounded-[10px]"
                width={300}
                height={400}
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

        <div>
          <h1 className="text-2xl font-bold">Transformed</h1>
          <div className="flex flex-col gap-4 justify-center items-center bg-gray-200 mt-5 rounded-xl h-[400px] w-[300px]">
            {!resource?.public_id ? (
              <p>Transformed Image</p>
            ) : (
              transformedImageUrl && (
                <CldImage
                  src={transformedImageUrl}
                  alt="Transformed Image"
                  className="w-full h-full object-cover rounded-[10px]"
                  width={300}
                  height={400}
                  {...transormations}
                />
              )
            )}
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center md:gap-10 gap-5">
          <button
            className="bg-black hover:bg-black/80 rounded-md px-6 py-3 text-white text-xl font-semibold"
            onClick={handleRestore}
          >
            Restore
          </button>
          <button className="border-2 border-black hover:bg-gray-200 rounded-md px-6 py-3 text-xl font-semibold">
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
