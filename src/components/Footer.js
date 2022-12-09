import styled from "styled-components";

export default function Footer(props) {
  return (
    <FooterContainer>
      <img src={props.src} alt="logo" />
      <h1>{props.title}</h1>
    </FooterContainer>
  );
}


 const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 117px;
  background-color: #dfe6ed;
  border-top: 1px solid #9eadba;
  display: flex;
  align-items: center;
  padding-left: 10px;

  img {
    width: 48px;
    height: 72px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    border: 8px solid white;
    margin-right: 14px;
  }

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
  }
`;
