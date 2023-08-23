import { server } from "@/pages/static/links";
import React, { useEffect } from "react";
import UnReady from "./unReady";
import socket from "../../socket";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

const Ready = (props: {
  setReady: any;
  name: string;
  setName: any;
  ready: boolean;
}) => {
  const { setReady, name, setName, ready } = props;
  const router = useRouter();

  //   let socket: any;

  //   useEffect(() => {
  //     socket = io(server);
  //     socket.on("connect", () => {
  //       console.log("Connected to the WebSocket server");

  //       // Add any event listeners or additional logic you need
  //       // For example, you can listen for custom events emitted by the server:
  //       socket.on("newMessage", (data: any) => {
  //         console.log("Received a new message:", data);
  //       });
  //     });
  //     // Inside your useEffect or any other appropriate function in the frontend code

  //     socket.on("disconnect", () => {
  //       console.log("Disconnected from the WebSocket server");
  //     });

  //     // Clean up the socket connection when the component unmounts
  //     return () => {
  //       socket.disconnect();
  //     };
  //   }, []);
  let uuid = uuidv4();
  useEffect(() => {
    uuid = uuidv4();
    localStorage.setItem("uuid", uuid);
    socket.on("Ready", (props) => {
      console.log("/////////");

      const Players = props.players;
      console.log(uuid);
      console.log(Players);
      const itemExists = Players.some((item: any) => item.id === uuid);

      if (itemExists) {
        goToPGame(props.roomId);
      }
    });
  }, []);
  async function Start() {
    setReady(true);
    setName(
      document.getElementById("val")!.value
        ? document.getElementById("val")!.value
        : "مرجان"
    );
    send();
  }
  const goToPGame = (roomId: string) => {
    router.push(`/game/${roomId}`);
  };
  const send = () => {
    console.log("sss");
    if (socket) {
      socket.emit("joinRoom", {
        name: document.getElementById("val")!.value
          ? document.getElementById("val")!.value
          : "مرجان",
        id: uuid,
      });
    }
  };
  return (
    <div className=" w-full h-full flex flex-col items-center justify-center gap-5">
      <h1 className=" font-bold text-8xl text-primary">{name}</h1>
      {!ready ? (
        <div className=" w-full flex flex-col justify-center items-center gap-5">
          <input
            id="val"
            dir="rtl"
            className=" w-1/2  h-12 px-2 outline-none"
            placeholder="مرجان احمد مرجان"
          />
          <button
            onClick={() => Start()}
            className=" bg-primary w-1/2  py-3 px-2 rounded-md text-white text-4xl font-bold"
          >
            جاهز.....؟
          </button>
        </div>
      ) : (
        <UnReady />
      )}
    </div>
  );
};

export default Ready;
