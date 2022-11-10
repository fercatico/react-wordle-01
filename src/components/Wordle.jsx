import React from "react";
import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup]);

  return (
    <div>
      Wordle: {currentGuess}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </div>
  );
};

export default Wordle;
