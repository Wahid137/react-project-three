import { styled } from "styled-components";
import TotalScore from "./TotalScore";

const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore />
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div``;
