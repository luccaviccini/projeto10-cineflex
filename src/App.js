import Header from './components/Header'
import TextInfo from './components/TextInfo'
import MoviesPoster from './components/MoviesPoster'
import Sessions from "./components/Sessions"
import { useEffect, useState } from 'react';
import styled from "styled-components";
import GlobalStyle from "./theme/GlobalStyles";
import { BrowserRouter, Route, Routes } from 'react-router-dom';




export default function App() {

  const [movies, setMovies] = useState([]);  



  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScreenContainer>
        <Header />
        <TextInfo />
        <Routes>
          <Route path='/' element={<MoviesPoster movies = {movies} setMovies={setMovies}/>}/>
          <Route path='/sessions' element={<Sessions/>}/>          
        </Routes>        
      </ScreenContainer>
    </BrowserRouter>
  );
}

const ScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`


