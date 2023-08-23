import { useRouter } from "next/router";
import React, { useEffect } from "react";
import socket from "../socket";

const UsersReady = (props: {
  allAnswers: number;
  roomId: string;
  finish: boolean;
  setFinish2: any;
}) => {
  const { allAnswers, roomId, finish, setFinish2 } = props;
  const router = useRouter();
  const { id } = router.query;
  const [userReady, setUserReady] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);

  useEffect(() => {
    // Show the box after 5 seconds
    const timeoutId = setTimeout(() => {
      if (finish) {
        setFinish2(true);
      } else {
        socket.emit("readyTimeOut", { roomId: roomId });
      }
    }, 10000);

    // socket.emit("currentQuestion", {
    //   roomId: roomId,
    //   current: current,
    // });
    // setCurrent(current + 1);
    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timeoutId);
  });
  useEffect(() => {
    if (id) {
      socket.on("userReady", (prop) => {
        if (id === prop.roomId) {
          setUserReady(prop.ready);
        }
      });
    }
  }, [id]);
  return (
    <div className="border-2 border-primary py-4 text-center w-full">
      <h1 className=" font-bold text-2xl  text-slate-400">{userReady}</h1>
      <hr className=" border-primary" />
      <h1 className=" font-bold text-2xl  text-primary">{allAnswers}</h1>
    </div>
  );
};

export default UsersReady;
