import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>CINEFLEX</h1>
      </Link>
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

  a {
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
  }

  h1 {
    color: #e8833a;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
  }
  
`;
