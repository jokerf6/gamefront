import React from "react";
import PersonMainStanding from "./personMainStanding";

const MainStanding = (props: { players: any }) => {
  const { players } = props;
  return (
    <div className=" w-full flex flex-row gap-8 justify-center items-center">
      {players.map((player: any, item: number) => {
        return (
          <PersonMainStanding
            name={player["name"]}
            rank={player["score"] + player["targetScore"]}
            pos={item + 1}
          />
        );
      })}
    </div>
  );
};

export default MainStanding;
