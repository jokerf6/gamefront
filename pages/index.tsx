import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Welcome from "./components/welcome";
import Button from "./components/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between w-screen  ${inter.className}`}
    >
      <Header />
      <Welcome />
      <div className=" absolute xl:bottom-8 lg:bottom-8 mid:bottom-8 bottom-4 flex xl:flex-row md:flex-row flex-col  justify-between items-center w-full px-16">
        <Button id={1} text="ابدا لعب" />
        <audio id="a2" src="/audios/button.wav"></audio>

        <Button id={2} text="غرفه خاصه" />
      </div>
    </main>
  );
}
