import styled from "styled-components";
import theme from "./Theme";

export const PrincipalContainer = styled.div`
  background-color: ${theme.colors.backgroundPrimary};
  height: 100vh;
  color: black;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
`;

export const HeaderLayout = styled.header`
  padding: .5rem 0;

  .header--title {
    margin: 0;
    text-align: center;
    font-weight: 300;
    font-size: 2rem;
  }

`;

export const MenuLayout = styled.div`

  display: flex;
  align-items: center;
  border-top: 1px solid ${theme.colors.borderColor};
  border-bottom: 1px solid ${theme.colors.borderColor};
  padding: .3rem 0;
  font-weight: 600;
  margin-top: 1rem;

  .menu--title {
    margin-right: auto;
  }

  .menu--button {
    margin-right: .5rem;
    font-weight: 600;

    &:last-child {
      margin-right: 0;
    }
  }

`;