const RoleDice = () => {
  return (
    <DiceContainer>
      <div>
        <img src={`/public/images/dice/dice_${currentDice}.png`} alt="" />
      </div>
    </DiceContainer>
  );
};

export default RoleDice;
