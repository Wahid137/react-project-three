import styled from "styled-components";
import dices from "../../public/images/dice/dices.png";
import { Button } from "../styled/Button";
const StartGame = () => {
  return (
    <Container>
      <div>
        <img src={dices} alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <div className="btn">
          <Button /* onClick={toggle} */>Play Now</Button>
        </div>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
