import styled from "styled-components";
import dices from "../../public/images/dice/dices.png";
const StartGame = () => {
  return (
    <Container>
      <div>
        <img src={dices} alt="" />
      </div>
      <div>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div``;
