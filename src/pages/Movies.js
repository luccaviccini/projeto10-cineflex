import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextInfo from "../components/TextInfo";

//https://mock-api.driven.com.br/api/v8/cineflex/movies

export default function Movies(props) {

  const [movies, setMovies] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(
          "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        );
        setMovies(res.data);
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
    <MoviesContainer>
      <TextInfo text={`Selecione o filme`} />
      {movies.map((movie) => (
        <Link to={`/sessoes/${movie.id}`} key={movie.id}>
          <img src={movie.posterURL} alt="posterURL"></img>
        </Link>
      ))}
    </MoviesContainer>
  );
    
}

const MoviesContainer = styled.div`
  box-sizing: border-box;
  max-width: 1000px;
  width: 100vw;
  background-color: white; 
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 46px;
  row-gap: 27px;

  img {
    width: 129px;
    height: 193px;
  }

  img:hover{
    cursor: pointer;
    scale:1.1;
  }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.834);
  z-index: 1;

  .spinner {
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: #3d5af1 transparent #3d5af1 transparent;
    border-radius: 50%;
    animation: spin-anim 1.2s linear infinite;

    @keyframes spin-anim {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .errorMsg {
    color: #ff0f00;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
`;
