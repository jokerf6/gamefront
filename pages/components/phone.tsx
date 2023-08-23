"use client";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import socket from "../socket";

const Phone = (props: {
  setChoosed: any;
  roomId: string;
  choosed: boolean;
}) => {
  const { setChoosed, roomId, choosed } = props;
  const [ans, setAns] = React.useState("");
  const handleKeyDown = (event: any) => {
    // Check if the pressed key is a numeric key (0-9)
    if (event.keyCode >= 48 && event.keyCode <= 57) {
      // Perform an action for numeric keys
      setAns(ans + String.fromCharCode(event.keyCode));
    } else if (event.keyCode >= 96 && event.keyCode <= 105) {
      // Perform an action for numeric keys
      setAns(ans + String.fromCharCode(event.keyCode - 48));
    } else if (event.keyCode === 8 && ans.length > 0) {
      setAns(ans.slice(0, -1));
    }
  };
  function Play(answer: number) {
    const audio = document.getElementById("a3");
    if (audio) audio.play();
    console.log(audio);
    console.log(answer);
    if (answer === -1 && ans.length > 0) {
      setAns(ans.slice(0, -1));
    } else {
      setAns(ans + answer.toString());
    }
  }
  window.addEventListener("keydown", handleKeyDown);

  // useEffect(() => {
  //   // Add the event listener when the component mounts

  //   // Remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [ans]);

  function send() {
    setChoosed(true);
    socket.emit("answer", {
      roomId: roomId,
      userId: localStorage.getItem("uuid"),
      answer: ans,
      type: "number",
    });
  }
  return (
    <div className=" flex gap-10 flex-col justify-start items-start">
      <audio id="a3" src="/audios/click.mp3"></audio>
      <div
        className={
          " w-full flex items-center justify-center bg-white p-4 text-primary font-bold text-3xl shadow-md h-20 text-center"
        }
      >
        <span className=" text-5xl">{ans}</span>
      </div>
      {!choosed ? (
        <div className=" w-full">
          <div className=" grid grid-cols-5 grid-rows-1 xl:gap-10 lg:gap-10 md:gap-10 gap-1 xl:mb-10 lg:mb-10 md:mb-10 mb-5 ">
            <div
              onClick={() => Play(0)}
              className=" flex justify-center items-center w-16 h-16 bg-white shadow-md   text-primary cursor-pointer hover:shadow-lg font-bold text-2xl"
            >
              0
            </div>
            <div
              onClick={() => Play(1)}
              className=" flex justify-center items-center w-16 h-16 bg-white shadow-md   text-primary cursor-pointer hover:shadow-lg font-bold text-2xl"
            >
              1
            </div>
            <div
              onClick={() => Play(2)}
              className=" flex justify-center items-center w-16 h-16 bg-white shadow-md   text-primary cursor-pointer hover:shadow-lg font-bold text-2xl"
            >
              2
            </div>{" "}
            <div
              onClick={() => Play(3)}
              className=" flex justify-center items-center w-16 h-16 bg-white shadow-md   text-primary cursor-pointer hover:shadow-lg font-bold text-2xl"
            >
              3
            </div>{" "}
            <div
              onClick={() => Play(-1)}
              className=" flex justify-center items-center w-16 h-16 bg-red-500 cursor-pointer hover:shadow-lg   text-white font-bold text-4xl"
            >
              <Icon icon="icon-park-outline:back-one" />
            </div>
          </div>
          <div className=" flex flex-row xl:gap-10 lg:gap-10 md:gap-10 gap-5 xl:mb-10 lg:mb-10 md:mb-10 mb-5">
            <div className=" grid grid-cols-3 grid-rows-2 xl:gap-10 lg:gap-10 md:gap-10 gap-5 ">
              <div
                onClick={() => Play(4)}
                className=" flex justify-center items-center w-16 h-16 bg-white shadow-md   text-primary cursor-pointer hover:shadow-lg font-bold text-2xl"
              >
                4
              </div>{" "}
              <div
                onClick={() => Play(5)}
                className=" flex justify-center items-center w-16 h-16 bg-white shadow-md   text-primary cursor-pointer hover:shadow-lg font-bold text-2xl"
              >
                5
              </div>{" "}
              <div
                onClick={() => Play(6)}
                className=" flex justify-center items-center w-16 h-16 bg-white shadow-md   text-primary cursor-pointer hover:shadow-lg font-bold text-2xl"
              >
                6
              </div>{" "}
              <div
                onClick={() => Play(7)}
                className=" flex justify-center items-center w-16 h-16 bg-white shadow-md   text-primary cursor-pointer hover:shadow-lg font-bold text-2xl"
              >
                7
              </div>{" "}
              <div
                onClick={() => Play(8)}
                className=" flex justify-center items-center w-16 h-16 bg-white shadow-md   text-primary cursor-pointer hover:shadow-lg font-bold text-2xl"
              >
                8
              </div>{" "}
              <div
                onClick={() => Play(9)}
                className=" flex justify-center items-center w-16 h-16 bg-white shadow-md   text-primary cursor-pointer hover:shadow-lg font-bold text-2xl"
              >
                9
              </div>{" "}
            </div>
            <div
              className=" flex justify-center items-center bg-green-500  cursor-pointer hover:shadow-lg   text-white font-bold text-8xl"
              onClick={() => send()}
              style={{
                width: "10.5rem",
                height: "10.5rem",
              }}
            >
              <Icon icon="carbon:send-filled" />
            </div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default Phone;
