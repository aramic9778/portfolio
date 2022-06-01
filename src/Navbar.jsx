import './App.css'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'


const Container = styled.div`
 position: sticky; top: 0;
 z-index: 4;
 height: 70px;
 background-color: #05385B;
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

const Item = styled.nav`
 
    
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

                <Item><Link to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1500}>Home</Link></Item>
                <Item>

                    <Link to="projects"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={1500}>Projects</Link>
                </Item>
                <Item><Link to="resume"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={1500}>Resume</Link></Item>
                <Item><Link to="contact"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={1500}>Contact</Link></Item>
                <Item>
                    <Link to="about"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={1500}>About Me</Link></Item>
            </ItemContainer>
        </Container>
    )
}

export default Navbar