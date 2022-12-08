import styled from 'styled-components';

export default function TextInfo() {
  return (
    <TextInfoContainer>
      <h1>Selecione o filme</h1>
    </TextInfoContainer>
  );
}

const TextInfoContainer = styled.div`
  width: 100vw;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 67px;
  
  background-color: #fff; // remover depois

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #293845;
  }
`;
