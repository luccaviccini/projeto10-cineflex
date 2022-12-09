import TextInfo from "../components/TextInfo";
import styled from "styled-components";

export default function Seats() {

  const numberOfSeats = [...Array(50).keys()].map((x) => ++x);
  return (
    <SeatsContainer>
      <TextInfo text={`Selecione o(s) assento(s)`} />
      <ul>
        {numberOfSeats.map((seat) => (
          <li key={seat}>
            <button>{seat}</button>
          </li>
        ))}
      </ul>
      <ul className="bottom-key">
        <div>
          <button className="green"></button>
          Selecionado
        </div>
        <div>
          <button className="gray"></button>
          Disponível
        </div>
        <div>
          <button className="yellow"></button>
          Indisponível
        </div>        
      </ul>
    </SeatsContainer>
  );
}


const SeatsContainer = styled.div`
  max-width: 413px;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  column-gap: 46px;
  row-gap: 27px;

  ul {
    width: inherit;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 7px;
    row-gap: 18px;
    padding: 0;
    margin: 0;
    background-color: beige;
    padding: 0px 29px;
  }

  button {
    box-sizing: border-box;
    height: 26px;
    width: 26px;
    background: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 12px;
    display:flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    cursor: pointer;
    background-color: #e0e6eb;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #4e5a65;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
  }

  .green {
    background: #1aae9e;
    border: 1px solid #0e7d71;
  }

  .yellow {
    background: #fbe192;
    border: 1px solid #f7c52b;
  }

  .bottom-key{
    justify-content: space-around;
  }
`;