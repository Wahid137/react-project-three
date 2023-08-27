import { styled } from "styled-components";
import dices from imgUrl;

const RoleDice = ({ currentDice, roleDice }) => {
  let imgUrl = `../../public/images/dice/dice_${currentDice}.png`;

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={dices} alt="" />
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
