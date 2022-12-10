//components
import Header from "./components/Header";
import Movies from "./pages/Movies";
import Sessions from "./pages/Sessions";
import Seats from "./pages/Seats";

import { useState } from "react";
import styled from "styled-components";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  console.log(selectedSeats);

  return (
    <BrowserRouter>
      <ScreenContainer>
        <Header />

        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/sessoes/:idFilme" element={<Sessions />} />
          <Route
            path="/assentos/:idSessao"
            element={
              <Seats
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
              />
            }
          />
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
`;
