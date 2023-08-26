import { styled } from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";

const GamePlay = () => {
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

const MainContainer = styled.div``;
