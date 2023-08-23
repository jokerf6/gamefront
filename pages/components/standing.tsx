// import React, { useEffect } from "react";
// import Rank from "./rank";

// const Standing = () => {
//   // const [boxes, setBoxes] = React.useState([
//   //   {
//   //     id: "h1",
//   //     name: "فهوووووووووووووود",
//   //     rank: 1,
//   //     score: 500,
//   //     targetNumber: 550,
//   //   },
//   //   {
//   //     id: "h2",

//   //     name: "Fahd hakem",
//   //     rank: 2,
//   //     score: 500,
//   //     targetNumber: 800,
//   //   },
//   //   {
//   //     id: "h3",

//   //     name: "فهوووووووووووووود",
//   //     rank: 3,
//   //     score: 500,
//   //     targetNumber: 1000,
//   //   },
//   //   {
//   //     id: "h4",

//   //     name: "فهوووووووووووووود",
//   //     rank: 4,
//   //     score: 500,
//   //     targetNumber: 1200,
//   //   },
//   // ]);

//   // //5
//   // return (
//   //   <div className=" w-full   flex flex-col gap-2  max-h-56  ">
//   //     {boxes.map((person, item) => {
//   //       return (
//   //         <Rank
//   //           id={person.id}
//   //           boxes={boxes}
//   //           setBoxes={setBoxes}
//   //           name={person.name}
//   //           rank={item + +1}
//   //           score={person.score}
//   //           targetNumber={person.targetNumber}
//   //         />
//   //       );
//   //     })}
//   //     {/* <Rank name="فهوووووووووووووود" rank={1} score={500} targetNumber={550} />
//   //     <Rank name="Fahd hakem" rank={2} score={500} targetNumber={800} />
//   //     <Rank name="فهوووووووووووووود" rank={3} score={500} targetNumber={1000} />
//   //     <Rank name="فهوووووووووووووود" rank={3} score={500} targetNumber={1000} /> */}
//   //   </div>
//   // );
//   const initialBoxes = [
//     {
//       id: 1,
//       name: "فهوووووووووووووود",
//       rank: 1,
//       score: 500,
//       targetNumber: 550,
//     },
//     {
//       id: 2,

//       name: "Fahd hakem",
//       rank: 2,
//       score: 500,
//       targetNumber: 800,
//     },
//     {
//       id: 3,

//       name: "فهوووووووووووووود",
//       rank: 3,
//       score: 500,
//       targetNumber: 1000,
//     },
//     {
//       id: 4,

//       name: "فهوووووووووووووود",
//       rank: 4,
//       score: 500,
//       targetNumber: 1200,
//     },
//   ];

//   const [boxes, setBoxes] = React.useState(initialBoxes);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     // Update the scores with random values (you can fetch from API or other sources)
//   //     const newBoxes = boxes.map((box: any) => ({
//   //       ...box,
//   //       score: box.score,
//   //     }));
//   //     setBoxes(newBoxes);
//   //   }, 1000);

//   //   return () => clearInterval(interval);
//   // }, [boxes]);

//   // Callback function to refresh the parent state when called from the child
//   const refreshParentState = (newState: any) => {
//     setBoxes(newState);
//   };
//   const sortedBoxes = [...boxes].sort((a, b) => b.score - a.score);
//   //l;kl;kl;
//   return (
//     <div className=" w-full">
//       {sortedBoxes.map((person, item) => (
//         <Rank
//           id={person.id}
//           boxes={boxes}
//           setBoxes={setBoxes}
//           name={person.name}
//           rank={item + 1}
//           score={person.score}
//           targetNumber={person.targetNumber}
//         />
//         // <div
//         //   key={box.id}
//         //   className="above"
//         //   style={{ top: `${(box.id - 1) * 120}px` }}
//         // >
//         //   Score: {box.score}
//         // </div>
//       ))}
//     </div>
//   );
// };

// export default Standing;
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import detect from "../static/detect";
import Rank from "./rank";

type User = {
  id: number;
  name: string;
  score: number;
  targetScore: number;
};

const initialUsers: User[] = [
  { id: 1, name: "John", score: 50, targetScore: 100 },
  { id: 2, name: "Alice", score: 30, targetScore: 90 },
  { id: 3, name: "Bob", score: 70, targetScore: 80 },

  { id: 4, name: "zex", score: 70, targetScore: 80 },
  // Add more users as needed
];

export default function Standing(props: { setGoTo: any; correctPlayers: any }) {
  // const [users, setUsers] = useState<User[]>(initialUsers);
  // const [startAnimation, setStartAnimation] = useState<boolean>(false);
  // const { setGoTo } = props;

  // useEffect(() => {
  //   // Wait for 5 seconds before starting the animation
  //   const timeoutId = setTimeout(() => {
  //     setStartAnimation(true);
  //   }, 2500);

  //   // Clean up the timeout when the component unmounts
  //   return () => clearTimeout(timeoutId);
  // }, []); // E
  // useEffect(() => {
  //   if (startAnimation) {
  //     // Simulate score updates every second
  //     const interval = setInterval(() => {
  //       const updatedUsers = users.map((user) => {
  //         const duration = 1000; // Animation duration in milliseconds
  //         const steps = Math.ceil(duration / 100);
  //         const increment = Math.ceil(user.targetScore / steps);

  //         return {
  //           ...user,
  //           score: Math.min(user.score + increment, user.targetScore), // Ensure the score doesn't exceed the target
  //         };
  //       });
  //       setUsers(updatedUsers);
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }
  // }, [users, startAnimation]);

  // const sortedUsers = [...users].sort((a, b) => b.score - a.score);
  // const Detect = new detect();
  const { correctPlayers } = props;
  console.log(correctPlayers);
  return (
    <div className="container w-full max-h-60 overflow-hidden animate4">
      <div className=" w-full max-h-60 overflow-hidden flex flex-col gap-4">
        {correctPlayers &&
          correctPlayers!.map((person: any, item: number) => {
            return (
              <Rank
                id={item + 1}
                name={person.name}
                rank={item + 1}
                score={person.score}
                targetNumber={person.targetScore}
              />
            );
          })}
      </div>
    </div>
  );
}

// AnimatedCounter Component
// const AnimatedCounter: React.FC<{
//   initialValue: number;
//   targetValue: number;
// }> = ({ initialValue, targetValue }) => {
//   const [count, setCount] = useState<number>(initialValue);

//   useEffect(() => {
//     let startTime: number;
//     const animationDuration = 1000; // 1 second

//     const updateCount = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const progress = timestamp - startTime;
//       const increment = Math.ceil(
//         (targetValue - initialValue) * (progress / animationDuration)
//       );
//       if (progress < animationDuration) {
//         setCount(initialValue + increment);
//         requestAnimationFrame(updateCount);
//       } else {
//         setCount(targetValue);
//       }
//     };

//     requestAnimationFrame(updateCount);

//     return () => {
//       // Ensure the count reaches the target value even if the component is unmounted
//       setCount(targetValue);
//     };
//   }, [initialValue, targetValue]);

//   return <span className=" text-2xl text-yellow-500">{count}</span>;
// };
