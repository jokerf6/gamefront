import React, { useEffect } from "react";
import socket from "../socket";

const Answer = (props: {
  id: number;
  setGoTo?: any;

  text: string;
  color: string;
  setChoosed?: any;
  choosed?: number;
  roomId?: any;
  yourId?: any;
}) => {
  const { text, color, setChoosed, choosed, id, roomId, yourId, setGoTo } =
    props;
  function answer() {
    setChoosed(id);
    socket.emit("answer", {
      roomId: roomId,
      userId: localStorage.getItem("uuid"),
      answer: id,
      type: "text",
    });
  }
  useEffect(() => {}, []);
  return (
    <button
      onClick={() => answer()}
      disabled={choosed !== 0}
      className={` ${color} h-24 ${
        choosed && choosed > 0 && id !== choosed ? "opacity-50" : "opacity-100"
      }  hover:shadow-lg xl:text-4xl lg:text-4xl text-3xl font-bold  text-white ${
        choosed ? "w-1/2" : "w-full"
      }`}
    >
      {text}
    </button>
  );
};

export default Answer;
