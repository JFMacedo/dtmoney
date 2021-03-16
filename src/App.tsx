import styled from 'styled-components';

const Title = styled.h1 `
  font-family: 'Asap';
  font-size: 50px;
  color: #00AA55;
`;

export function App() {
  return (
    <div className="App">
      <Title>Hello world!</Title>
    </div>
  );
}