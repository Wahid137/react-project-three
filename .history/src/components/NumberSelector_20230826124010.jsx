const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div></div>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
