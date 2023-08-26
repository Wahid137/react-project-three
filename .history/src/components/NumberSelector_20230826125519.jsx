const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div></div>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
