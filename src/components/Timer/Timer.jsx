import React from "react";

function Timer({ time }) {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return (
    <div className="timer">
      <span>{minutes < 10 ? "0" + minutes : minutes}</span>
      <span>:</span>
      <span>{seconds < 10 ? "0" + seconds : seconds}</span>
    </div>
  );
}

export default Timer;
