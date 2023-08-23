import Link from "next/link";
import React from "react";

const Tail = () => {
  return (
    <div className=" w-full flex flex-row items-center justify-center absolute bottom-8">
      <h1 className=" text-2xl font-bold text-white ">
        <span className="text-stroke2"> Powered By</span>{" "}
        <Link
          className=" text-primary cursor-pointer"
          href={"https://www.linkedin.com/in/fahd-hakem-139627204/"}
        >
          FAHD
        </Link>
      </h1>
    </div>
  );
};

export default Tail;
