import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useTranslation } from 'react-i18next';

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  text-align: center;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const LanguageContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: black;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
const LanImage= styled.img`
  width:30px;
  height:30px;
`;

const Navbar = () => {
    const { t, i18n } = useTranslation();
    
    function handleClick(lang){
      i18n.changeLanguage('en-US');
    }



  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
        <Link to="/" style={{ textDecoration: 'none' }}><Logo>.Teemo</Logo></Link>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <LanguageContainer>
          <Language onClick={()=>handleClick('en')}>
            <LanImage src="https://cdn2.iconfinder.com/data/icons/world-flags-1-1/100/Britain-512.png"/>
            EN
          </Language>
            <Language onClick={()=>handleClick('en')}>
            <LanImage src="https://cdn-icons-png.flaticon.com/512/197/197524.png"/>
            BS
            </Language>
          <Language onClick={()=>handleClick('en')}>
            <LanImage src="https://cdn-icons-png.flaticon.com/512/197/197593.png"/>
            ES
          </Language>
            <Language onClick={()=>handleClick('en')}>
            <LanImage src="data:image/png;base64,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"/>
            TR
            </Language>
          </LanguageContainer>
        </Center>
        <Right>
          <Link to="/register" style={{ textDecoration: 'none' }}><MenuItem><p>{t('REGISTER')}</p></MenuItem></Link>
          <Link to="/login" style={{ textDecoration: 'none' }}><MenuItem>SIGN IN</MenuItem></Link>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;