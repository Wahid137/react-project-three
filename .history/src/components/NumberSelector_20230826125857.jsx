const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">{arrNumber.map()}</div>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
