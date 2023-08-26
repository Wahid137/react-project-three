import { useState } from "react";
import StartGame from "./components/StartGame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  return (
    <>
      <StartGame />
    </>
  );
}

export default App;
