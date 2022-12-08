import styled from "styled-components";
import movieImage from "../assets/images/2067.png"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoaderContainer from "./Movies"


export default function Sessions() {


  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sessions, setSessions] = useState([]);
  const { idFilme } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
        );
        setSessions(response.data);
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
    <SessionsContainer>
      {sessions.days.map((session) => (
        <Session key={session.id}>
          <h1>
            {session.weekday} - {session.date}
          </h1>
          {session.showtimes.map((time) => (
            <button key={time.id}>{time.name}</button>
          ))}
        </Session>
      ))}

      <SessionsFooter>
        <img src={sessions.posterURL} alt="movieImage"></img>
        <h1>{sessions.title}</h1>
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