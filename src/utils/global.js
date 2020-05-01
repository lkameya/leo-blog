import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  body {
    &.dark {
      background: #202030;
      color: #EAE8FF;

      h1 {
        color: #EAE8FF;
      }

      a {
        color: #9F86C0;
      }
    }

    &.light {
      background: #f5f5f5;
      color: #202030;

      h1 {
        color: #202030;
      }

      a {
        color: #593C8F;
      }
    }
  }

  .main-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 50px;
    padding-top: 0;
    margin-top: 0 !important;

    h1 {
      line-height: 0 !important;
    }
  }

  h1, h3 {
    margin: 0 !important;
  }

  article {
    margin: 0 !important;
    padding: 0 !important;
  }

`;

