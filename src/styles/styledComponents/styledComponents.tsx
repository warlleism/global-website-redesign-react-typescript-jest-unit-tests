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

export const StyledDropdownList = styled.ul<{ $isVisible: boolean }>`
  padding: 10px;
  position: absolute;
  left: 0;
  top: 2.25rem;
  transform: ${props => props.$isVisible ? 'translateY(0px)' : 'translateY(-40px)'};
  opacity: ${props => props.$isVisible ? '1' : '0'};
  pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};
  transition: transform 0.3s ease-in-out, opacity .5s ease;
  background-color: white;
  border-radius: 0.25rem;
`;

export const StyledDropdownItem = styled.li`
  color: #55554e;
  transition: color .3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #1062ac;
  }
`

export const StyledContainer = styled.div`

  width: 70vw;
  margin: 130px auto ;
  @media (max-width: 768px) {
   width: 95%;
    padding: 0px 00px 0px 00px;
  }

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;


export const StyledLink = styled.a`
  background-color: #0096FB;
  border-radius: 50px;
  color: #fff;
  z-index: 10;  
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 30px;

  @media (max-width: 768px) {
    width: 80px;
    height: 20px;
    font-size: 1.2rem;
  }
`
export const StyledProduct = styled.div<{ scale: number }>`
  background-color: #F2F2F2;
  height: 60vh;
  width: 90%;
  scale: ${({ scale }) => scale};
  border-radius: 15px;
  display: flex;
  transition: all 0.3s ease-in-out;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: solid 1px #4A4D4F;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
    width: 100%;
  }



  flex-shrink: 0;
`;