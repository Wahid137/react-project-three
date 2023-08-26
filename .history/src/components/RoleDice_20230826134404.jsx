const RoleDice = () => {
  return (
    <DiceContainer>
      <div>
        <img src={`/public/images/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;
