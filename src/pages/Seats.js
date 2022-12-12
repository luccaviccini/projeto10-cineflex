import TextInfo from "../components/TextInfo";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import LoaderContainer from "./Movies";
import axios from "axios";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";

export default function Seats({ setsucessObj }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [seats, setSeats] = useState([]);
  const [selectedSeatsNumber, setselectedSeatsNumber] = useState([]);
  const { idSessao } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(
          `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
        );
        setSeats(res.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
        console.log(err);
      }
    };
    fetchItems();
  }, []);

  function handleClick(seat) {
    if (seat.isAvailable && !selectedSeats.includes(seat.id)) {
      setSelectedSeats([...selectedSeats, seat.id]);
      setselectedSeatsNumber([...selectedSeatsNumber, seat.name]);
    } else if (seat.isAvailable && selectedSeats.includes(seat.id)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat.id));
      setselectedSeatsNumber(
        selectedSeatsNumber.filter((s) => s !== seat.name)
      );
    } else if (!seat.isAvailable) {
      alert("Esse assento não está disponível");
    }
  }

  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // if no seats are selected
    if (selectedSeats.length === 0) {
      alert("Por favor, selecione pelo menos um assento");
    } else {
      const body = {
        ids: selectedSeats,
        name: name,
        cpf: cpf,
      };
      const request = axios.post(
        `https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`,
        body
      );
      request.then(() => {
        console.log("Compra realizada com sucesso!");

        setsucessObj({
          movie: seats.movie.title,
          date: seats.day.date,
          time: seats.name,
          seats: selectedSeatsNumber,
          name: name,
          cpf: cpf,
        });

        // useNavigate to /sucesso

        navigate("/sucesso");
      });
      request.catch(() => {
        console.log("Erro ao realizar a compra");
      });
    }
  }

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
              <button
                data-test="seat"
                onClick={() => handleClick(seat)}
                className={
                  !seat.isAvailable
                    ? "yellow"
                    : selectedSeats.includes(seat.id)
                    ? "green"
                    : "gray"
                }>
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
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome do Comprador:</label>
            <input
              data-test="client-name"
              id="name"
              type="text"
              placeholder="Digite seu nome..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="cpf">CPF do comprador:</label>
            <input
              data-test="client-cpf"
              id="cpf"
              type="text"
              placeholder="Digite seu CPF..."
              value={cpf}
              onChange={(e) => setCPF(e.target.value)}
              required
            />
          </div>

          <button data-test="book-seat-btn" type="submit">
            Reservar assento(s)
          </button>
        </form>
      </FormContainer>

      <Footer
        src={seats.movie.posterURL}
        title={seats.movie.title}
        weekday={seats.day.weekday}
        time={seats.name}
      />
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    cursor: pointer;
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

  .bottom-key {
    justify-content: space-around;
  }
`;

const FormContainer = styled.div`
  padding-bottom: 180px;
  
  form {
    display: column;
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 225px;
    height: 42px;
    background: #e8833a;
    border-radius: 3px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #ffffff;
    border: none;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  input {
    width: 327px;
    height: 51px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;

    font-family: "Roboto", sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #afafaf;
    padding-left: 18px;
  }

  label {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 21px;
    color: #293845;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
    align-content: start;
  }
`;
