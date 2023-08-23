import React from "react";

const NumBox = (props: { color: string; ans: string }) => {
  const { color, ans } = props;
  console.log(color);
  return (
    <div className={` ${color}-500 shadow-md shadow-ques p-4`}>
      <h3 className=" font-bold text-5xl text-white">{ans}</h3>
    </div>
  );
};

export default NumBox;
