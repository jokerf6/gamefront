import React from "react";
import socket from "../socket";

const NextQuestion = (props: { roomId: string }) => {
  const { roomId } = props;
  const [clicked, setClicked] = React.useState(false);
  function ready() {
    setClicked(true);
    socket.emit("ready", { roomId: roomId });
  }
  return (
    <div className=" w-full flex items-center justify-center absolute bottom-0 ">
      <button
        disabled={clicked}
        onClick={() => ready()}
        className={` text-primary text-5xl font-bold ${
          !clicked ? "hover:opacity-50" : "opacity-50"
        }`}
      >
        السؤال التالي
      </button>
    </div>
  );
};

export default NextQuestion;
