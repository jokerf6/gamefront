import detect from "@/pages/static/detect";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react-web";
import animationData from "../../../public/images/celebrate.json";
import socket from "@/pages/socket";
import { useRouter } from "next/router";
const FinalRank = (props: { players: any }) => {
  const { players } = props;
  const finalStandings = [1, 2];
  const Detect = new detect();
  const router = useRouter();
  return (
    <div className=" h-screen w-screen flex items-center justify-center flex-col gap-16">
      <div className=" absolute w-full h-full">
        <Lottie
          options={{
            animationData: animationData,
            loop: true,
            autoplay: true,
          }}
          width={"50%"}
          height={"50%"}
        />
      </div>

      <h1 className=" text-9xl text-primary font-bold">الترتيب النهائي</h1>
      {/* <AnimatePresence>
        {finalStandings.map((team, idx: number) => (
          // <motion.div
          //   key={idx}
          //   initial={{ opacity: 0, y: 120 }}
          //   animate={{ opacity: 1, y: 0 }}
          //   exit={{ opacity: 0, y: -20 }}
          //   transition={{ duration: 0.5 }}
          //   className="team-card"
          // >
          //   <div className="team-logo">{/* Render team logo
    </div>
      <div className="team-details">
        <h2>fahd haked</h2>
        <p>Rank: 500</p>
      </div>{" "}
    </motion.div>

    ))}
    </AnimatePresence> */}
      <div className=" w-1/2 h-fit  max-h-1/2 bg-primary shadow-md  rounded-lg px-4 py-2 flex flex-col gap-2">
        {players.map((player: any, index: number) => {
          return (
            <div
              dir={
                Detect.containsArabicCharacters(player["name"]) ? "rtl" : "ltr"
              }
              className=" w-full bg-white px-4 py-3 shadow-md flex flex-row gap-2  items-center justify-between "
            >
              <div className=" flex flex-row">
                <Icon
                  icon={`twemoji:${
                    index === 0 ? "1st" : index === 1 ? "2nd" : "3rd"
                  }-place-medal`}
                  className=" text-5xl items-center justify-center"
                />
                <h1 className=" text-4xl text-primary font-bold">
                  {player["name"]}
                </h1>
              </div>
              <span className=" text-gold font-bold text-2xl">
                {player["score"] + player["targetScore"]}
              </span>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className=" text-primary bg-transparent text-4xl w-fit font-bold z-20"
        onClick={() => {
          router.replace("/ready");
          socket.disconnect();
        }}
      >
        البحث عن لاعبين جدد
      </button>
    </div>
  );
};

export default FinalRank;
