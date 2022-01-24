import styled from "styled-components";

const StyledItem = styled.li`
  margin-bottom: 10px;
`;

const StyledText = styled.p`
  display: inline;
  margin-right: 15px;
`;

const StyledButton = styled.button`
  background-color: #fff;
  padding: 3px 6px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 30%);
  font-weight: 600;
  font-size: 14px;

  &:active {
    background-color: #035bad;
  }
`;

export { StyledItem, StyledText, StyledButton };
