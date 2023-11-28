import React from 'react';
import styled from 'styled-components';

const ResetButton = styled.button`
  background-color: #a8ff78; // Light Green
  color: #333;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const ResetButtonContainer = styled.div`
  display: flex;
`;

const Reset: React.FC = () => {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <ResetButtonContainer>
      <ResetButton onClick={handleReset}>Reset</ResetButton>
    </ResetButtonContainer>
  );
};

export default Reset;