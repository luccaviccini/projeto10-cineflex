import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Success({ sucessObj }) {
  const { movie, date, time, seats, name, cpf } = { ...sucessObj };
  return (
    <SucessContainer>
      <h1>Pedido feito com sucesso!</h1>

      <InfoContainer>
        <h2>Filme e sessão</h2>
        <p>{movie}</p>
        <p>
          {date} {time}
        </p>
      </InfoContainer>

      <InfoContainer>
        <h2>Ingressos</h2>
        {seats.map((seat) => (
          <p key={seat}>Assento {seat}</p>
        ))}
      </InfoContainer>

      <InfoContainer>
        <h2>Comprador</h2>
        <p>Nome: {name}</p>
        <p>CPF: {cpf}</p>
      </InfoContainer>

      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
    </SucessContainer>
  );
}

const SucessContainer = styled.div`
  width: 100vw;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #247a6b;
    margin: 0px, 80px;
    width: 180px;
    text-align: center;
  }

  button {
    margin-top: 70px;
    width: 225px;
    height: 42px;
    background: #e8833a;
    border-radius: 3px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #ffffff;
    border: none;
  }
`;

const InfoContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  
  margin-top: 30px;
  padding-left: 29px;
  

  h2 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
    margin-bottom: 10px;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;
  }
`;
