"use client";
import React, { useEffect } from "react";
import Answer from "./answer";
import { Icon } from "@iconify/react";
const CorrectAnswer = (props: { setGoTo: any; correctAnswer: any }) => {
  const { setGoTo, correctAnswer } = props;
  return (
    <div className=" w-full  flex flex-col items-center justify-center animate2">
      <div className=" bg-green-500 w-full h-20 flex flex-row gap-4 items-center justify-center text-2xl">
        <h1 className=" text-white font-bold">Correct Answer</h1>
        <Icon icon="icon-park-solid:correct" className=" text-white" />
      </div>
      <Answer
        text={correctAnswer["text"]}
        color={`${
          correctAnswer["id"] === 1
            ? "bg-red-500"
            : correctAnswer["id"] === 2
            ? "bg-green-500"
            : correctAnswer["id"] === 3
            ? "bg-blue-500"
            : "bg-blue-500"
        }`}
        id={correctAnswer["id"]}
      />{" "}
    </div>
  );
};

export default CorrectAnswer;
