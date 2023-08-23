import React, { useEffect } from "react";
import Header from "./header";
import Tail from "./tail";
import { Icon } from "@iconify/react";
import Phone from "./phone";
import Ques from "./ques";
import CountdownTimer from "./timer";
import socket from "../socket";
import { useRouter } from "next/router";

const Type2 = (props: { setGoTo: any; question: any; roomId: any }) => {
  const { setGoTo, question, roomId } = props;
  const date = new Date().getTime();
  const [choosed, setChoosed] = React.useState(false);
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
    <div>
      <div className=" xl:flex lg:flex md:flex hidden">
        <Header />
      </div>
      <div className="  mt-10 text-center w-screen flex flex-col gap-12 items-center justify-center">
        <div className=" xl:flex lg:flex md:flex  absolute hidden top-50 right-10">
          <CountdownTimer
            initialTime={50}
            now={date2}
            type={question["type"]}
            setGoTo={setGoTo}
            roomId={roomId}
            yourId={localStorage.getItem("uuid")}
          />
        </div>
        <Ques question={question} />
        <Phone choosed={choosed} setChoosed={setChoosed} roomId={roomId} />
      </div>
    </div>
  );
};

export default Type2;
