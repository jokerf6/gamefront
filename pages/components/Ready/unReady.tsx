import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
const UnReady = () => {
  return (
    <div className="text-center flex items-center justify-center Spin">
      <Image
        src={Logo}
        alt="Logo"
        width={200} // Set the width of the image
        height={150} // Set the height of the image
      />
    </div>
  );
};

export default UnReady;
