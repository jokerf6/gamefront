import React, { useEffect } from "react";

import Header from "./header";
import Tail from "./tail";
import Type1 from "./type1";
import Correct from "./correct";
import Correct2 from "./correct2";
import Type2 from "./type2";
import MainStanding from "./mainStanding";
import socket from "../socket";
import FinalRank from "./finalRank/finalRank";
const QuestionsBox1 = (props: {
  choosed: any;
  setChoosed: any;
  date: any;
  question: any;
  roomId: any;
  yourId: any;
  players: any;
  setCurrent: any;
  current: number;
  setQuestion: any;
  setPlayers: any;
  last: any;
  setLast: any;
}) => {
  const {
    last,
    setLast,
    current,
    choosed,
    setCurrent,
    setChoosed,
    date,
    question,
    roomId,
    yourId,
    players,
    setQuestion,
    setPlayers,
  } = props;
  console.log("///////////////");
  console.log(last);
  const [allAnswers, setAllAnswers] = React.useState(0);
  const [correctAnswer, setCorrectAnswer] = React.useState("");
  const [answer1, setAnswer1] = React.useState(0);
  const [answer2, setAnswer2] = React.useState(0);
  const [answer3, setAnswer3] = React.useState(0);
  const [answer4, setAnswer4] = React.useState(0);
  const [correctPlayers, setCorrectPlayers] = React.useState([]);
  const [targetScore, setTargetScore] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [goToCorrect, setGoTo] = React.useState(false);
  const [finish, setFinsih] = React.useState(false);
  const [finish2, setFinsih2] = React.useState(false);

  const [answers, setAnswers] = React.useState([]);

  useEffect(() => {
    socket.on("finish", (prop) => {
      if (prop.roomId === roomId) {
        setFinsih(true);
      }
    });
    socket.on("toCorrect", (prop) => {
      if (prop.roomId === roomId) {
        setGoTo(true);
        setFinsih(prop.finish);
        setAllAnswers(prop.allAnswers);
        setAnswer1(prop.answer1);
        setAnswer2(prop.answer2);
        setAnswer3(prop.answer3);
        setAnswer4(prop.answer4);
        setLast(prop.last);
        setCorrectAnswer(prop.correctAnswer);
        setCorrectPlayers(prop.correctPlayers);
        setQuestion(prop.question);
        setPlayers(prop.players);

        // console.log(".........");
        // console.log(prop.userId);
        // console.log(prop.score);
        // console.log(prop.targetScore);
        // console.log(localStorage.getItem("uuid"));
        const indexUser = prop.players.findIndex(
          (obj: any) => obj.id === localStorage.getItem("uuid")
        );

        setScore(prop.players[indexUser]["score"]);
        setTargetScore(prop.players[indexUser]["targetScore"]);

        setCurrent(current + 1);
      }
    });
    socket.on("toCorrectNumber", (prop) => {
      // console.log("88888888888888");
      // console.log(prop);
      if (prop.roomId === roomId) {
        setFinsih(prop.finish);

        setPlayers(prop.players);
        setLast(prop.last);

        setQuestion(prop.question);

        setAnswers(prop.allAnswers);
        const indexUser = prop.players.findIndex(
          (obj: any) => obj.id === localStorage.getItem("uuid")
        );

        setScore(prop.players[indexUser]["score"]);
        setTargetScore(prop.players[indexUser]["targetScore"]);
        setCorrectAnswer(prop.correctAnswer);
        setCorrectPlayers(prop.correctPlayers);
        setGoTo(true);

        setCurrent(current + 1);
      }
    });
    // c
    socket.on("next", (roomId) => {
      if (roomId === roomId) {
        setGoTo(false);
      }
    });
  }, [current]);

  return (
    <div className="w-screen  h-full ">
      {finish2 ? (
        <FinalRank players={players} />
      ) : (
        <div className=" w-full h-full">
          {!goToCorrect ? (
            <div className=" w-full flex flex-col items-center justify-center  pt-9 ">
              <MainStanding players={players} />
            </div>
          ) : undefined}
          {/* // ques1 */}
          {/* <Type1 choosed={choosed} setChoosed={setChoosed} date={date} /> */}
          {/* <Correct /> */}
          {last["type"] === "text" ? (
            goToCorrect ? (
              <Correct
                allAnswers={allAnswers}
                correctAnswer={correctAnswer}
                answer1={answer1}
                answer2={answer2}
                answer3={answer3}
                answer4={answer4}
                correctPlayers={correctPlayers}
                targetScore={targetScore}
                score={score}
                setGoTo={setGoTo}
                roomId={roomId}
                current={current}
                setChoosed={setChoosed}
                setCurrent={setCurrent}
                setFinish2={setFinsih2}
                finish={finish}
              />
            ) : (
              <Type1
                choosed={choosed}
                setChoosed={setChoosed}
                date={date}
                question={question}
                setGoTo={setGoTo}
                goToCorrect={goToCorrect}
                roomId={roomId}
                yourId={yourId}
              />
            )
          ) : last["type"] === "number" ? (
            goToCorrect ? (
              <Correct2
                setGoTo={setGoTo}
                correctAnswer={correctAnswer}
                answers={answers}
                correctPlayers={correctPlayers}
                targetScore={targetScore}
                score={score}
                roomId={roomId}
                setFinish2={setFinsih2}
                finish={finish}
              />
            ) : (
              <Type2 question={question} roomId={roomId} setGoTo={setGoTo} />
            )
          ) : undefined}

          {/* <Correct2 /> */}
        </div>
      )}
    </div>
  );
};

export default QuestionsBox1;
