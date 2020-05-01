import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .main-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  h1 {
    margin: 0 !important;
    color: ${props => props.theme.colors.title};
  }

  a {
    color: ${props => props.theme.colors.primary};
  }
`;

