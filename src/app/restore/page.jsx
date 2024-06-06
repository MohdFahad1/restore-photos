import Input from "@/components/MediaUploader";
import Transformed from "@/components/Transformed";
import React from "react";

const RestorePage = () => {
  return (
    <>
      <div className="px-2 py-10 md:px-0 flex justify-center items-center mx-auto">
        <div className="mx-auto p-5 rounded-2xl flex md:gap-10 gap-5 flex-col">
          <h1 className="md:text-5xl text-3xl font-bold text-center">
            Restore any photo
          </h1>
          <div className="flex flex-col md:flex-row md:gap-20 gap-5">
            <Input />
            <Transformed />
          </div>
        </div>
      </div>
    </>
  );
};

export default RestorePage;
