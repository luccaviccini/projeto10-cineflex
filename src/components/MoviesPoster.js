import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import apiURLs from "./apiURLs";
//https://mock-api.driven.com.br/api/v8/cineflex/movies

export default function MoviesPoster() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await axios.get(apiURLs.getMovies);
        setMovies(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err)        
      }
    }
    fetchItems();
  }, []);
      

  if (isLoading) {
    return (
      <LoaderContainer>
        <div className="spinner"></div>
      </LoaderContainer>
    );
  }


  return (
    <MoviesPosterContainer>
      {movies.map((movie) => (
        <img key={movie.id} src={movie.posterURL} alt="posterURL"></img>
      ))}
    </MoviesPosterContainer>
  );
}

const MoviesPosterContainer = styled.div`
  max-width: 1000px;
  width: 100vw;
  background-color: #ffffff;
  margin-top: 167px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 46px;
  row-gap: 27px;

  img {
    width: 129px;
    height: 193px;
  }
`;

const LoaderContainer = styled.div`
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
      0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
    }
}
`
