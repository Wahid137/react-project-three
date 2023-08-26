import styled from "styled-components";
import dices from "../../public/images/dices.png";
const StartGame = () => {
  return (
    <Container>
      <div>
        <img src={dices} alt="" />
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div``;
