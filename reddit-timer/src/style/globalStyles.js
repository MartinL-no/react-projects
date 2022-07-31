import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: ${(props) => props.theme.font.family.default};
  }

  h1 {
    font-family: ${(props) => props.theme.font.family.headline};
    font-weight: 400;
    font-size: 2.375rem;
    color: ${(props) => props.theme.color.dark};
  }

  h2 {
    font-family: ${(props) => props.theme.font.family.headline};
    font-weight: 400;
    font-size: 24px;
    color: ${(props) => props.theme.color.dark};
  }

  a {
    font-family: ${(props) => props.theme.font.family.default};
    color: ${(props) => props.theme.color.midDark};
    text-decoration: none;
    cursor: pointer;
  }

  button {
    color: ${(props) => props.theme.color.light};
    background-color: #FDB755;
    cursor: pointer;
    border: none;

    &:hover, :focus {
      background-color: #FEA62E;
    }
  }
`;

export default GlobalStyle;
