import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      padding: 1rem 2rem;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
      text-align: left;
      color: var(--color-text-body);
    }

    td {
      padding: 1rem 2rem;
      border: none;
      border-radius: 0.25rem;
      color: var(--color-text-body);
      background-color: var(--color-shape);

      &:first-child {
        color: var(--color-text-title);
      }

      &.income {
        color: var(--color-green);
      }

      &.outcome {
        color: var(--color-red);
      }
    }
  }
`;