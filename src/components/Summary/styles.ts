import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  div {
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--color-text-title);
    background-color: var(--color-shape);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
    }

    &.highlight-background {
      color: #FFFFFF;
      background-color: var(--color-green);
    }
  }
`;