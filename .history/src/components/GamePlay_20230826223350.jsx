import { styled } from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import { useState } from "react";
import RoleDice from "./RoleDice";

const GamePlay = () => {
  const [score, setSCore] = useState(0);
  const [error, setError] = useState(false);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();

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
      <RoleDice />
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
