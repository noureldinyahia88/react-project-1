import React from 'react';
import { FaShoppingCart,FaSearch } from "react-icons/fa";
import styled from 'styled-components';

    const Container = styled.div`
    height: 60px;
    /* width: 100%;
    position: fixed;
    z-index: 1000;
    background-color: #fff; */
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

    const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    `;

    const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 5px;
    `;

    const Input = styled.input`
    border: none;
    &:focus{
        outline: none;
    }
    `;

    const Center = styled.div`
    flex: 1;
    text-align: center;
    `;

    const Logo = styled.h1`
    font-weight: bold;
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

    const Navbar = () => {
    return (
        <Container>
        <Wrapper>
            <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input placeholder="Search" />
                <FaSearch style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
            </Left>
            <Center>
            <Logo>LAMA.</Logo>
            </Center>
            <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
                <FaShoppingCart />
            </MenuItem>
            </Right>
        </Wrapper>
        </Container>
    );
};

export default Navbar;