import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    margin: 30px;
    height: 80vh;
    position: relative;
    transition: all 0.5s ease; 
    &:hover{
        border-radius: 5%;
        box-shadow: 0 16px 30px 0 #DFDFDF;
        transform: scale(1.1);
    }

`;
const Image = styled.img`
    width: 100%;
    height:100%;
    object-width: cover;
    border-radius: 5%;

`;
const Title = styled.h1`
    font-size: 35px;
    font-weight: 700;
    color: white;
    margin-bottom: 20px;
    text-shadow: 7px 4px 2px #000000;
`;
const Button = styled.button`
    border: none;
    padding: 15px 30px;
    background-color: white;
    color: black;
    cursor: pointer;
    border: 1px solid black;
    transition: all 0.5s ease; 
    border-radius: 20px;
    &:hover{
        background-color: #f13c3c;
        transform: scale(1.2);
        color: black;
    }
`;
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;


const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
