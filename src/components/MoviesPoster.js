import styled from 'styled-components';
import axios from "axios";
import { useEffect, useState } from 'react';
import apiURLs from "./apiURLs"
//https://mock-api.driven.com.br/api/v8/cineflex/movies

export default function MoviesPoster() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const request = axios.get(apiURLs.getMovies)
    request.then((response) => {
      setMovies(response.data);
    });
  }, []);



  return (
    <MoviesPosterContainer>
      {movies.map((movie) => (
        <img key = {movie.id}src={movie.posterURL} alt="posterURL"></img>
      ))}
        
    </MoviesPosterContainer>
  );
}

const MoviesPosterContainer = styled.div`
  max-width: 1000px;
  width: 100vw;
  background-color: #FFFFFF;
  margin-top: 167px;  
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;  
  column-gap: 2px;
  row-gap: 27px;

    

  img {
    width: 129px;
    height: 193px;
  }
`;