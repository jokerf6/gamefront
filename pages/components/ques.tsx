import React from "react";

const Ques = (props: { question: any }) => {
  const { question } = props;
  return (
    <div>
      <p
        className=" text-4xl xl:text-6xl lg:text-6xl font-bold text-ques px-4"
        dir="rtl"
      >
        {question["question"]}
      </p>
    </div>
  );
};

export default Ques;
