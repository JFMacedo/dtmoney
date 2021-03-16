import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #F0F2F5;
    --color-blue: #267FD9;
    --color-blue-light: #4799ED;
    --color-green: #41D967;
    --color-red: #D9415A;
    --color-shape: #FFFFFF;
    --color-text-title: #363F5F;
    --color-text-body: #969CB3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.50%;
    }
  }

  body {
    background-color: var(--color-background);

    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;