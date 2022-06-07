import styled from "styled-components";
import theme from "./Theme";

export const PrincipalContainer = styled.div`
  background-color: ${theme.colors.backgroundPrimary};
  /* height: 100vh; */
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


//Main Container
export const MainContainer = styled.main`
  margin-top: 3rem;
`;

export const SectionComics = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  padding: 1rem;
`;

export const ComicDiv = styled.div`
  
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 2rem;

  .comic--container {
    height: 400px;    
  }

  .comic--container--img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border: 3px solid black;
    box-sizing: border-box;
  }

  .comic--title {
    font-weight: 500;
    margin-bottom: 0;
  }

  .comic--date {
    margin: 0;
    font-size: .8rem;
    color: ${theme.colors.altColor};
  }
`;