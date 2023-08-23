import React from "react";

const Button = (props: { id: number; text: String }) => {
  const { id, text } = props; // Destructure props to access id and text
  function Play() {
    const audio = document.getElementById("a2");
    if (audio) audio.play();
    console.log(audio);
  }

  return (
    <h1
      className=" font-extrabold text-primary text-5xl cursor-pointer hover:text-6xl font- "
      onClick={() => {
        Play();
      }}
    >
      {text}
    </h1>
  );
};

export default Button;
