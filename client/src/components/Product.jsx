import {FavoriteBorderOutlined,SearchOutlined,ShoppingCartOutlined} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    flex: 1;
    margin: 20px;
    min-width: 380px;
    height: 420px;
    display: flex;
    border-radius: 20px 20px 0 0;
    align-items: center;
    justify-content: center;
    position: relative;
    &:hover ${Info}{
        transition: all 0.5s ease;
        opacity:1;
        box-shadow: 0 16px 30px 0 #DFDFDF;
    }
    display:flex;
    flex-direction: column;
    
`;
const Image = styled.img`
    height: 350px;
    width: 100%;
    border-radius:20px 20px 0 0;
    box-shadow: 0 16px 30px 0 #DFDFDF;
    &:hover {
      transition: all 0.5s ease;
      opacity:1;
      box-shadow: 0px 0px 0px 0px #FFFFFF;
  }
`;

const Icon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease; 
    border: 1px solid;
    &:hover{
        background-color: #DFDFDF;
        transform: scale(1.2);
        color: white;
    }
    cursor: pointer;
`;
const ProductContent = styled.div`
    width:100%;
    background: rgb(241,60,60);
    background: linear-gradient(0deg, rgba(241,60,60,0.5410539215686274) 0%, rgba(255,255,255,0.5354516806722689) 100%);
`;
const  Title = styled.h2`
    font-size: 14px;
    margin-left: 15px;
    margin-top: 5px;
`;
const  Desc = styled.h2`
  font-size: 14px;
  margin-left: 15px;
  margin-top: 5px;
`;
const  Price = styled.h2`
  font-size: 14px;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 5px;
`;


const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
        <ProductContent>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Price>${item.price}</Price>
        </ProductContent>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
          <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
