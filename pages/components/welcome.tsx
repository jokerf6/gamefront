import React from "react";
import Image from "next/image";
import Logo from "../../public/images/Logo.png";
const Welcome = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center ">
      <div
        className=" bg-white xl:w-1/2 xl:h-3/4 lg:w-1/2 lg:h-3/4 mid:w-2/3 mid:h-2/3 w-full h-2/3"
        style={{
          borderRadius: "50%",
          boxShadow: " 0px 5px 5px rgba(252, 127, 101, 1)",
        }}
      >
        <div className=" flex   flex-col justify-center items-center">
          <Image src={Logo} width={300} height={300} alt="logo" />
          <h1 className=" font-bold xl:text-9xl lg:text-9xl md:text-8xl text-6xl  text-white text-stroke text ">
            خمسة عقل
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
