import Header from './components/Header'
import TextInfo from './components/TextInfo'
import MoviesPoster from './components/MoviesPoster'
import Sessions from "./components/Sessions"
import { useEffect, useState } from 'react';
import styled from "styled-components";
import GlobalStyle from "./theme/GlobalStyles";




export default function App() {

  



  return (
    <>
      <GlobalStyle />
      <ScreenContainer>
        <Header />
        <TextInfo />
        {/* <MoviesPoster /> */}
        <Sessions />
      </ScreenContainer>
    </>
    
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


