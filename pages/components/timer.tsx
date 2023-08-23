import React, { useState, useEffect } from "react";
import socket from "../socket";

const CountdownTimer = ({
  initialTime,
  now,
  setGoTo,
  roomId,
  yourId,
  type,
}: any) => {
  const targetTime = now + initialTime * 1000;
  function Play() {
    const audio = document.getElementById("a4");
    if (audio) audio.play();
  }
  const calculateTimeLeft = () => {
    const timeLeft = targetTime - new Date().getTime();

    if (timeLeft <= 0) {
      return { seconds: 0 };
    }

    const seconds = Math.floor(timeLeft / 1000);

    if (seconds === 0) {
      // console.log("finish firessssssssssssssst");
      socket.emit("correctTimeOut", {
        roomId: roomId,
        type: type,
        userId: localStorage.getItem("uuid"),
      });
      // setGoTo(true);
    }
    if (seconds <= 5) {
      Play();
    }
    return { seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTime]);
  return (
    <div
      className={` rounded-full ${
        timeLeft.seconds <= 5 && timeLeft.seconds % 2 != 0
          ? "bg-red-500"
          : "bg-primary"
      } flex items-center justify-center text-white`}
      style={{ height: "100px", width: "100px" }}
    >
      <audio id="a4" src="/audios/alert.mp3"></audio>

      <p className=" text-3xl font-bold">{timeLeft.seconds}</p>
    </div>
  );
};

export default CountdownTimer;
