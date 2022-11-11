import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import allWords from "./db.json";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    /*fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        //random int between 0 & 14
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });*/

    const randomSolution =
      allWords.solutions[Math.floor(Math.random() * allWords.solutions.length)];
    setSolution(randomSolution.word);
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle (Lingo)</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
