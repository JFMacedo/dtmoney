import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--color-blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  button {
    height: 3rem;
    padding: 0 2rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    border: none;
    color: #FFFFFF;
    background-color: var(--color-blue-light);
    transition: filter 200ms;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;