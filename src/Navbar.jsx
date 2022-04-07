import React from 'react'
import styled from 'styled-components'
import logo from './A.png'


const Container = styled.div`
 height: 100px;
 background-color: #0cd8a3;
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
 
    color: #043237;
    font-family: 'Frijole', cursive;
    font-size: 35px;
    margin: 50px;
    cursor: pointer;
    transition: all 0.1s linear;
    &:hover {
    color: white;
    transform: scale(1.1);
    border-bottom: 3px solid white;
  }
`

const Logo = styled.div`
    font-family: 'Fontdiner Swanky', cursive;
    color: white;
    font-size: 85px;
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