import React, { useEffect } from "react";
import Tail from "./tail";
import ResultBox from "./resultBox";
import Header from "../components/header";
import CorrectAnswer from "./correctAnswer";
import Standing from "./standing";
import YourScore from "./yourScore";
import UsersReady from "./usersReady";
import NextQuestion from "./nextQuestion";
import socket from "../socket";
import { useRouter } from "next/router";

const Correct = (props: {
  setGoTo: any;
  allAnswers: any;
  correctAnswer: any;
  answer1: any;
  answer2: any;
  answer3: any;
  answer4: any;
  correctPlayers: any;
  targetScore: any;
  score: any;
  roomId: string;
  current: number;
  finish: boolean;
  setFinish2: any;
  setChoosed: any;
  setCurrent: any;
}) => {
  const {
    finish,
    setFinish2,
    setGoTo,
    allAnswers,
    correctAnswer,
    answer1,
    answer2,
    answer3,
    answer4,
    correctPlayers,
    targetScore,
    roomId,
    score,
    current,
    setChoosed,
    setCurrent,
  } = props;
  const [showAnswer, setShowAnswer] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show the box after 5 seconds
    const timeoutId = setTimeout(() => {
      setShowAnswer(true);
    }, 5000);
    const handleBeforeUnload = (event: any) => {
      // Redirect the user to another page
      // router.replace("/ready");
      socket.disconnect();
      event.preventDefault();
      return "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    // socket.emit("currentQuestion", {
    //   roomId: roomId,
    //   current: current,
    // });
    // setCurrent(current + 1);
    setChoosed(0);
    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timeoutId);
  });
  return (
    <div className=" w-screen h-screen  flex-col flex">
      <div
        className="  absolute top-16 text-center w-screen flex flex-col items-center justify-center gap-4 "
        // style={{
        //   rotate: "180deg",
        // }}
        style={{
          height: "86%",
        }}
      >
        <div
          className=" w-full xl:flex lg:flex md:flex hidden flex-row justify-center  items-center gap-8 h-full p-8"
          style={{
            maxHeight: "200px",
          }}
        >
          <ResultBox num={answer1} all={allAnswers} color="bg-red-500" />
          <ResultBox num={answer2} all={allAnswers} color="bg-green-500" />
          <ResultBox num={answer3} all={allAnswers} color="bg-blue-500" />
          <ResultBox num={answer4} all={allAnswers} color="bg-yellow-500" />
        </div>
        <img />
        <div className=" h-full  w-full flex flex-col gap-8 justify-center">
          <YourScore start={score} target={targetScore} />
          <div className=" absolute xl:flex  lg:flex md:flex  hidden xl:top-32 lg:top-32 top-64 right-8 w-36 bg-white shadow-md">
            <UsersReady
              finish={finish}
              setFinish2={setFinish2}
              allAnswers={allAnswers}
              roomId={roomId}
            />
          </div>
          <div className="   w-full flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between items-center gap-8  px-8 mt-0">
            {showAnswer ? (
              <Standing setGoTo={setGoTo} correctPlayers={correctPlayers} />
            ) : undefined}
            {showAnswer ? (
              <CorrectAnswer setGoTo={setGoTo} correctAnswer={correctAnswer} />
            ) : undefined}
          </div>
          {showAnswer && !finish ? <NextQuestion roomId={roomId} /> : undefined}
        </div>
      </div>
    </div>
  );
};

export default Correct;
