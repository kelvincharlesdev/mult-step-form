import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const StepCircle = styled.div<{ $filled: boolean }>`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.$filled ? "#007bff" : "transparent")};
  border: 2px solid #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const StepText = styled.div`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
  color: #333;
`;


