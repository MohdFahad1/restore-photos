import React from "react";

const Loader = ({ height, width }) => {
  return (
    <div
      className={`flex justify-center items-center h-${height} w-${width} mt-5`}
    >
      <div
        className={`border-dotted border-[10px] border-blue-500 rounded-full h-12 w-12 animate-spin`}
      ></div>
    </div>
  );
};

export default Loader;
