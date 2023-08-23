import React, { useEffect } from "react";
import socket from "../socket";
import QuestionsBox1 from "@/pages/components/questionsBox1";
import { useRouter } from "next/router";
import { getSupportedBrowsers } from "next/dist/build/utils";
import { server } from "../static/links";
import Header from "../components/header";
import Tail from "../components/tail";
import FinalRank from "../components/finalRank/finalRank";

const Game = () => {
  const router = useRouter();

  const date = new Date().getTime();
  const [choosed, setChoosed] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [back, setBack] = React.useState(false);
  const { id } = router.query;
  const [question, setQuestion] = React.useState("");
  const [players, setPlayers] = React.useState([]);
  const [current, setCurrent] = React.useState(0);
  const [last, setLast] = React.useState<any>("");

  let yourId: any;
  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      // Redirect the user to another page
      router.replace("/ready");
      event.preventDefault();
      return "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    yourId = localStorage.getItem("uuid");
    // console.log(router.query);

    const fetchData = async () => {
      if (id) {
        const response = await fetch(`${server}/user/${id}`);
        const jsonData = await response.json();
        // console.log(jsonData);
        const Players = jsonData["data"][0]["players"];
        const itemExists = Players.some((item: any) => item.id === yourId);
        if (!itemExists) {
          router.replace("/ready");
        }
        // console.log(Players);
        // console.log(yourId);
        setPlayers(Players);
        // console.log("okllllllllllllllll");
        socket.emit("currentQuestion", {
          roomId: id,
          current: current,
        });
      }
      socket.on("Question", (props) => {
        // console.log(props);
        // console.log(props);
        if (id && id === props.roomId) {
          console.log("----------------------");
          console.log(props);
          setQuestion(props.question);
          setLast(props.question);
          setPlayers(props.players);
          // socket.disconnect();
        }
      });
    };
    fetchData();
    setLoading(false);
  }, [id, router]);

  return (
    <main className=" w-screen h-screen flex flex-col justify-center items-center">
      <div className="hidden xl:flex lg:flex">
        <Header />
      </div>
      {loading ? undefined : (
        <QuestionsBox1
          question={question}
          choosed={choosed}
          setChoosed={setChoosed}
          date={date}
          roomId={id}
          yourId={yourId}
          players={players}
          current={current}
          setCurrent={setCurrent}
          setQuestion={setQuestion}
          setPlayers={setPlayers}
          last={last}
          setLast={setLast}
        />
      )}
    </main>
  );
};

export default Game;
