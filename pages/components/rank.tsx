import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import detect from "../static/detect";

const Rank = (props: {
  name: string;
  rank: number;
  score: number;
  targetNumber: number;
  id: any;
}) => {
  const { name, rank, score, targetNumber, id } = props;
  const Detect = new detect();
  const [count, setCount] = useState(score);
  const duration = 5000;
  const steps = Math.ceil(duration / 100);
  const increment = Math.ceil(targetNumber / steps);

  return (
    <div
      className={` w-full bg-white shadow-md  flex justify-between items-center px-8 py-4 `}
      dir={`${Detect.containsEnglishCharacters(name) ? "ltr" : "rtl"}`}
    >
      <div className=" flex items-center justify-center text-4xl">
        <Icon
          icon={`${
            rank === 1
              ? "noto:1st-place-medal"
              : rank === 2
              ? "noto:2nd-place-medal"
              : "noto:3rd-place-medal"
          }`}
        />
        <h3 className=" text-primary font-bold text-2xl">{name}</h3>
      </div>
      <span className=" text-2xl text-yellow-500">{count}</span>
    </div>
  );
};
export default Rank;
