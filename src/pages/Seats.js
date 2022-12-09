import TextInfo from "../components/TextInfo";
import styled from "styled-components";
import { SessionsFooter } from "./Sessions";
import { Link, useParams } from "react-router-dom";
import LoaderContainer from "./Movies";
import axios from "axios";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";

export default function Seats() {

  

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [seats, setSeats] = useState([]);  
  const {idSessao} = useParams(); 



  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(
          `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
        );
        setSeats(res.data); 
        setIsLoading(false);
      } catch (err) {
        setError(err)
        setIsLoading(false);
        console.log(err)
      }
    };
    fetchItems();
  }, []);




  

  return isLoading ? (
    <LoaderContainer>
      <div className="spinner"></div>
    </LoaderContainer>
  ) : error ? (
    <LoaderContainer>
      <div className="errorMsg">Erro ao carregar os filmes :( </div>
    </LoaderContainer>
  ) : (
    <>
      <SeatsContainer>
        <TextInfo text={`Selecione o(s) assento(s)`} />
        <ul>
          {seats.seats.map((seat) => (
            <li key={seat.id}>
              <button className={seat.isAvailable ? "gray" : "yellow"}>
                {seat.name}
              </button>
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
      <Footer src={seats.movie.posterURL} title={seats.movie.title} />
    </>
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
    opacity: 0.7;
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

  .gray {
    background: #c3cfd9;
    border: 1px solid #808f9d;
  }

  .bottom-key{
    justify-content: space-around;
  }
`;