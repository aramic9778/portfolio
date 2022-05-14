import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import logo from './A.png'
import { useState } from 'react'


const Container = styled.div`
 height: 70px;
 background-color: #379683;
 padding: 20px;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
`

const ItemContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 

`

const LogoContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin: 30px;
`

const Item = styled.div`
 
    
    color: #EDF5E1;

 font-family: 'Special Elite', cursive;
    font-size: 29px;
    margin: 50px;
    cursor: pointer;
    transition: all 0.1s linear;
    &:hover {
    color: #EDF5E1;
    transform: scale(1.1);
    border-bottom: 5px dashed #EDF5E1;
  }
`

const Logo = styled.div`
    font-family: 'Fontdiner Swanky', cursive;
    color: #EDF5E1;
    font-size: 65px;
`


const Navbar = () => {
    return (
        <Container>
            <LogoContainer>
                <Logo>AA.</Logo>
            </LogoContainer>
            <ItemContainer>
                <Item>Home</Item>
                <Item>Projects</Item>
                <Item>Resume</Item>
                <Item>Contact</Item>
                <Item>About Me</Item>
            </ItemContainer>

        </Container>
    )
}

export default Navbar