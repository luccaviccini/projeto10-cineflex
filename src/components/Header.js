import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512">
        <title>Arrow Back</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M244 400L100 256l144-144M120 256h292"
        />
      </svg>
      </Link>
      <h1>CINEFLEX</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100vw;
  height: 67px;
  background-color: #c3cfd9;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;

  h1 {
    color: #e8833a;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
  }

  svg {
    position: absolute;
    left: 10px;
    height: 40px;
    color: grey;
    bottom: 13px;
  }

  svg:hover {
    cursor: pointer;
  }
`;
