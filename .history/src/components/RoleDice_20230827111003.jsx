import { styled } from "styled-components";
import dice1 from require("../../public/images/dice/dice_1.png)

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
