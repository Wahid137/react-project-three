import { styled } from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import { useState } from "react";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../styled/Button";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [showRules, setShowRules] = useState(false);

  const generateRandomUser = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have no selected any number!");
      return;
    }
    const randomNumber = generateRandomUser();
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div>
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button>{}</Button>
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
