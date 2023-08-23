import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function YourScore(props: { start: number; target: number }) {
  const [startAnimation, setStartAnimation] = useState(false);
  const { start, target } = props;
  const [counter, setCounter] = useState(start);
  const targetNumber = target + start; // The target number for the animation
  // console.log(start);
  // console.log(target);
  useEffect(() => {
    // Start the animation after 5 seconds
    const timeoutId = setTimeout(() => {
      setStartAnimation(true);
    }, 5000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // Animate the counter from 0 to the targetNumber
    if (startAnimation && counter < targetNumber) {
      const animationInterval = setInterval(() => {
        const duration = 1000; // Animation duration in milliseconds
        const steps = Math.ceil(duration / 100);
        const increment = Math.ceil(target / steps);

        setCounter((prevCounter) =>
          Math.min(prevCounter + increment, targetNumber)
        );
      }, 50); // Change the interval duration for faster or slower animation

      // Clean up the interval when the animation is done
      return () => clearInterval(animationInterval);
    }
  }, [startAnimation, counter, targetNumber]);

  return (
    <p className=" font-bold text-6xl text-primary">
      Your Score: <span className=" text-yellow-300">{counter}</span>
    </p>
  );
}
