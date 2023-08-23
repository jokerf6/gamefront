import React, { useEffect } from "react";

const ResultBox = (props: { num: number; color: string; all: number }) => {
  const { num, color, all } = props;

  return (
    <div
      className=" flex flex-col-reverse gap-2 p-4"
      style={{
        height: "200px",
      }}
    >
      <div
        className={` flex items-center justify-center w-40 ${color}`}
        style={{ height: "20%" }}
      >
        <span className=" text-white font-bold">{num} Answer</span>
      </div>
      <div
        className={` flex w-40 ${color}`}
        style={{
          height: `${((num / all) * 100).toFixed()}%`,
        }}
      ></div>
    </div>
  );
};

export default ResultBox;
