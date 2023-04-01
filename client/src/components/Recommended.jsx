import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background: rgb(241,60,60);
  background: linear-gradient(180deg, rgba(241,60,60,0.5410539215686274) 0%, rgba(255,255,255,0.5354516806722689) 100%);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  padding:10px;
font-family: 'Archivo Black', sans-serif;
`;


const Recommended = () => {
  return <Container>Recommended Products</Container>;
};

export default Recommended;
