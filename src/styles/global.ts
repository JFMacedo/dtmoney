import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #F0F2F5;
    --color-blue: #3366CC;
    --color-blue-light: #366CCC;
    --color-green: #33CC66;
    --color-input-background: #E7E9EE;
    --color-input-border: #D7D7D7;
    --color-red: #CC3366;
    --color-shape: #FFFFFF;
    --color-text-title: #363F5F;
    --color-text-body: #969CB3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:focus {
      outline: 1px dotted #CCCCCC;
    }
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

  .react-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000080;
  }

  .react-modal-content {
    position: relative;
    width: 100%;
    max-width: 576px;
    padding: 3rem;
    border-radius: 0.25rem;
    background-color: var(--color-background);
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: none;
    line-height: 0;
    background-color: transparent;
    transition: filter 200ms;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;