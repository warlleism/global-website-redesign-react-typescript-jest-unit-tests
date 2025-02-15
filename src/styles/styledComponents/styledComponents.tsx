import styled from "styled-components";

export const StyledListItem = styled.li`
  position: relative;
  color: white;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`;

export const StyledSocialMidia = styled.div`
  cursor: pointer;
  border: solid 1px #fff;
  border-radius: 5px;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const StyledDropdownList = styled.ul<{ isVisible: boolean }>`
  padding: 10px;
  position: absolute;
  left: 0;
  top: 2.25rem;
  width: 160px;
  display: ${props => props.isVisible ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
  border-radius: 0.25rem;
`;

export const StyledContainer = styled.div`
 margin: 130px 0px 130px 0px;
`;
