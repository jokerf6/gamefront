import React from "react";
import { Icon } from "@iconify/react";

const PersonMainStanding = (props: {
  name: string;
  rank: number;
  pos: number;
}) => {
  const { name, rank, pos } = props;
  return (
    <div className=" shadow-md bg-white flex flex-row gap-8  px-8 py-4">
      <Icon
        icon={`${
          pos === 1
            ? "noto:1st-place-medal"
            : pos === 2
            ? "noto:2nd-place-medal"
            : "noto:3rd-place-medal"
        }`}
        fontSize="40px"
      />
      <div className=" flex flex-col">
        <h1 className=" bg-green-500 text-white font-bold text-2xl">{name}</h1>
        <span className=" text-gold font-bold"> {rank}</span>
      </div>
    </div>
  );
};

export default PersonMainStanding;
