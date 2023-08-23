import React from "react";
import Image from "next/image";
import Logo from "../../public/images/Logo.png";
export default function Header() {
  return (
    <div className="absolute  left-8 top-2">
      <Image
        src={Logo}
        alt="Logo"
        width={150} // Set the width of the image
        height={100} // Set the height of the image
      />
    </div>
  );
}
