import styled from "styled-components";

import { darken, transparentize } from 'polished';

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

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`;

interface TypeButtonProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC66',
  red: '#CC3366'
}

export const TypeButton = styled.button<TypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 4rem;
  border-radius: 0.25rem;
  border: 1px solid var(--color-input-border);
  background-color: ${ (props) => props.isActive
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
  };
  transition: all 200ms;

  &:hover {
    border-color: ${darken(0.1, '#D7D7D7')};
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  span {
    font-size: 1rem;
    color: var(--color-text-title);
  }
`;