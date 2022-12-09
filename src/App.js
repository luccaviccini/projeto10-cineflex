//components
import Header from './components/Header'
import TextInfo from './components/TextInfo'//pages
import Movies from './pages/Movies'
import Sessions from "./pages/Sessions"

import { useEffect, useState } from 'react';
import styled from "styled-components";

import { BrowserRouter, Route, Routes } from 'react-router-dom';




export default function App() {

   
  



  return (
    <BrowserRouter>      
      <ScreenContainer>
        <Header />
        
        <Routes>
          <Route path='/' element={<Movies />}/>
          <Route path='/sessoes/:idFilme' element={<Sessions/>}/>          
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


