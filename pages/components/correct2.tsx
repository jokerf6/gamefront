import React, { useEffect } from "react";
import NumBox from "./numBox";
import CorrectAnswer from "./correctAnswer";
import Standing from "./standing";
import YourScore from "./yourScore";
import socket from "../socket";
import UsersReady from "./usersReady";
import { color } from "../static/colors";
import NextQuestion from "./nextQuestion";
import { useRouter } from "next/router";

const Correct2 = (props: {
  setGoTo: any;
  roomId: string;
  correctAnswer: any;
  answers: any;
  correctPlayers: any;
  targetScore: any;
  score: any;
  setFinish2: any;
  finish: boolean;
}) => {
  const {
    setFinish2,
    finish,
    setGoTo,
    roomId,
    correctAnswer,
    answers,
    correctPlayers,
    targetScore,
    score,
  } = props;
  const [showAnswer, setShowAnswer] = React.useState(false);
  const router = useRouter();
  console.log("//////////");
  console.log(answers);
  useEffect(() => {
    // Show the box after 5 seconds
    const timeoutId = setTimeout(() => {
      setShowAnswer(true);
    }, 2500);
    const handleBeforeUnload = (event: any) => {
      // Redirect the user to another page
      // router.push("/ready");
      socket.disconnect();

      event.preventDefault();
      return "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timeoutId);
  });
  return (
    <div className=" absolute top-40 text-center w-screen flex flex-col items-center justify-center gap-24  animate ">
      <div className=" xl:flex lg:flex md:flex hidden flex-row justify-center items-center gap-3 flex-wrap">
        {answers.map((item: any, idx: number) => {
          console.log("///////////////////");
          console.log(item);
          return <NumBox color={color[idx]["bgClass"]} ans={item["answer"]} />;
        })}
      </div>
      <div className=" w-full flex flex-col gap-8">
        <YourScore start={score} target={targetScore} />
        <div className="absolute xl:flex  lg:flex md:flex  hidden xl:top-32 lg:top-32 top-64 right-8 w-36 bg-white shadow-md">
          <UsersReady
            finish={finish}
            setFinish2={setFinish2}
            allAnswers={answers.length}
            roomId={roomId}
          />
        </div>{" "}
        <div className=" w-full flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between items-center gap-8 px-8 mt-10">
          {showAnswer ? (
            <Standing setGoTo={setGoTo} correctPlayers={correctPlayers} />
          ) : undefined}
          {showAnswer ? (
            <CorrectAnswer setGoTo={setGoTo} correctAnswer={correctAnswer} />
          ) : undefined}
        </div>
        .{showAnswer && !finish ? <NextQuestion roomId={roomId} /> : undefined}
      </div>
    </div>
  );
};

export default Correct2;
