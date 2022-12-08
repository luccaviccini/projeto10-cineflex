import styled from "styled-components";
import movieImage from "../assets/images/2067.png"

export default function Sessions() {
  return (
    <SessionsContainer>
      <Session>
        <h1>Quinta-feira - 24/06/2021</h1>
        <button>15:00</button>
        <button>19:00</button>
      </Session>

      <Session>
        <h1>Quinta-feira - 24/06/2021</h1>
        <button>15:00</button>
        <button>19:00</button>
      </Session>
      <Session>
        <h1>Quinta-feira - 24/06/2021</h1>
        <button>15:00</button>
        <button>19:00</button>
      </Session>
      <Session>
        <h1>Quinta-feira - 24/06/2021</h1>
        <button>15:00</button>
        <button>19:00</button>
      </Session>
      <Session>
        <h1>Quinta-feira - 24/06/2021</h1>
        <button>15:00</button>
        <button>19:00</button>
      </Session>
      <Session>
        <h1>Quinta-feira - 24/06/2021</h1>
        <button>15:00</button>
        <button>19:00</button>
      </Session>
      <Session>
        <h1>1-feira - 24/06/2021</h1>
        <button>15:00</button>
        <button>19:00</button>
      </Session>
      <Session>
        <h1>2-feira - 24/06/2021</h1>
        <button>15:00</button>
        <button>19:00</button>
      </Session>
      <Session>
        <h1>2-feira - 24/06/2021</h1>
        <button>15:00</button>
        <button>19:00</button>
      </Session>
      <Session>
        <h1>2-feira - 24/06/2021</h1>
        <button>15:00</button>
        <button>19:00</button>
      </Session>
      <Session>
        <h1>2-feira - 24/06/2021</h1>
        <button>15:00</button>
        <button>19:00</button>
      </Session>

      <SessionsFooter>
        <img src={movieImage} alt="movieImage"></img>
        <h1>Enola Holmes</h1>
      </SessionsFooter>
    </SessionsContainer>
  );
}

const SessionsContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 25px;
  padding-bottom: 170px;
`;

const Session = styled.div`
  box-sizing: border-box;
  max-width: 400px;
  width: 100%;  
  background-color: #fff;
  padding-left: 23px;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #293845;

    margin-bottom: 25px;
  }

  button {
    width: 82px;
    height: 43px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    margin-right: 8px;
    background-color: #e8833a;
    color: #fff;
    border: none;
    border-radius: 3px;
  }
`;

const SessionsFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 117px;
  background-color: #dfe6ed;
  border-top: 1px solid #9eadba;
  display: flex;
  align-items: center;
  padding-left: 10px;
  

  img {
    width: 48px;
    height: 72px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    border: 8px solid white;
    margin-right: 14px;
  }

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
  }
`;