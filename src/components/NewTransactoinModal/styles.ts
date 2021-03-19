import styled from "styled-components";

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: var(--color-text-title);
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 0.25rem;
    border: 1px solid var(--color-input-border);
    background-color: var(--color-input-background);

    &::placeholder {
      color: var(--color-text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    height: 4rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.25rem;
    border: none;
    color: #FFFFFF;
    background-color: var(--color-green);
    transition: filter 200ms;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;