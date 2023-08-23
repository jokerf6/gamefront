import React, { useEffect } from "react";
import Ques from "./ques";
import Image from "next/image";
import Answer from "./answer";
import CountdownTimer from "./timer";
import { useRouter } from "next/router";
import socket from "../socket";
const Type1 = (props: {
  choosed: any;
  setChoosed: any;
  date: any;
  question: any;
  setGoTo: any;
  goToCorrect: boolean;
  roomId: any;
  yourId: any;
}) => {
  const {
    choosed,
    setChoosed,
    date,
    question,
    setGoTo,
    goToCorrect,
    roomId,
    yourId,
  } = props;
  const router = useRouter();
  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      // Redirect the user to another page
      socket.disconnect();
      // router.push("/ready");
      event.preventDefault();
      return "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
  });
  const date2 = new Date().getTime();
  return (
    <div
      className={`   text-center w-screen flex flex-col items-center  pt-10   `}
      style={{ height: "84%" }}
    >
      <div className="pb-10">
        <CountdownTimer
          initialTime={50}
          now={date2}
          type={question["type"]}
          setGoTo={setGoTo}
          roomId={roomId}
          yourId={yourId}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-12">
        <Ques question={question} />

        <div className=" flex flex-col w-full gap-2">
          <div className=" flex xl:flex-row lg:flex-row md:flex-row flex-col w-full px-16 gap-2">
            <Answer
              text={question["answers"][0]["text"]}
              id={question["answers"][0]["id"]}
              color="bg-red-500"
              setChoosed={setChoosed}
              choosed={choosed}
              roomId={roomId}
              setGoTo={setGoTo}
              yourId={yourId}
            />
            <Answer
              text={question["answers"][1]["text"]}
              id={question["answers"][1]["id"]}
              color="bg-green-500"
              setChoosed={setChoosed}
              choosed={choosed}
              roomId={roomId}
              setGoTo={setGoTo}
              yourId={yourId}
            />
          </div>
          <div className=" flex xl:flex-row lg:flex-row md:flex-row flex-col w-full px-16 gap-2 pb-4">
            <Answer
              text={question["answers"][2]["text"]}
              id={question["answers"][2]["id"]}
              color="bg-blue-500"
              setChoosed={setChoosed}
              choosed={choosed}
              roomId={roomId}
              yourId={yourId}
              setGoTo={setGoTo}
            />
            <Answer
              text={question["answers"][3]["text"]}
              id={question["answers"][3]["id"]}
              color="bg-yellow-500"
              setChoosed={setChoosed}
              choosed={choosed}
              roomId={roomId}
              yourId={yourId}
              setGoTo={setGoTo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type1;
