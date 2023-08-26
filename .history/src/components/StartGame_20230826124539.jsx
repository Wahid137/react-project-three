import styled from "styled-components";
import dices from "../../public/images/dice/dices.png";
import { Button } from "../styled/Button";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src={dices} alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <div className="btn">
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </Container>
  );
};
StartGame.propTypes = {
  name: PropTypes.string.isRequired,
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
    .btn {
      text-align: end;
    }
  }
`;
