import { styled } from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import { useState } from "react";

const GamePlay = () => {
  const [error, setError] = useState(false);
  const [selectedNumber, isSelectedNumber] = useState();
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore />
        <NumberSelector />
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
