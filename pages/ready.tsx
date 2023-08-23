import React, { useEffect } from "react";
import Header from "./components/header";
import Button from "./components/button";
import Tail from "./components/tail";
import { io } from "socket.io-client";
import { server } from "./static/links";
import Ready from "./components/Ready/ready";
import UnReady from "./components/Ready/unReady";
import LayoutComponent from "./socket";
import useWebSocket from "./socket";
import FinalRank from "./components/finalRank/finalRank";
const ready = ({ socket }: any) => {
  const [ready, setReady] = React.useState(false);
  const [name, setName] = React.useState("اكتب اسمك");

  return (
    <main className=" w-screen h-screen">
      <Header />
      <Ready setReady={setReady} name={name} setName={setName} ready={ready} />
      <Tail />
    </main>
  );
};

export default ready;
