import './App.css'
import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-scroll'
import { mobile, tablet } from './responsive';

const Container = styled.div`
 position: sticky; top: 0;
 z-index: 4;
 height: 70px;
 background-color: #05385B;
 padding: 20px;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 ${mobile({ flexDirection: "column", height: "10vh", justifyContent: "space-evenly" })}
 ${tablet({ flexDirection: "column", height: "14vh", justifyContent: "space-evenly" })}
 
`

const ItemContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 ${mobile({ flexDirection: "row" })}
 ${mobile({ flexDirection: "row" })}

`

const LogoContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 flex-direction: row ;
 margin: 30px;

${mobile({ margin: "10px" })}
${tablet({ margin: "5px", fontSize: "14px" })}


`

const Item = styled.nav`
 
    
    color: #EDF5E1;

    font-family: 'Special Elite', cursive;
    font-size: 29px;
    margin: 55px;
    cursor: pointer;
    transition: all 0.1s linear;
    &:hover {
    color: #EDF5E1;
    transform: scale(1.1);
    border-bottom: 5px dashed #EDF5E1;
  }
  ${mobile({ margin: "5px", fontSize: "14px" })}
  ${tablet({ margin: "5px", fontSize: "24px" })}
`

const Logo = styled.div`
    font-family: 'Fontdiner Swanky', cursive;
    color: #EDF5E1;
    font-size: 65px;
    margin-right: 10px ;
    ${mobile({ fontSize: "30px" })}
    ${tablet({ fontSize: "50px" })}
`
const Icon = styled.div`
    padding-top: 4px ;
    width: 30px;
    color: #EDF5E1;
    transition: all 0.3s ease;
    text-align: center ;

    &:hover {
    cursor: pointer;
    background-color: #EDF5E1;
    border-radius: 8px ;
    color: #05385B;
   
  }
  ${mobile({ margin: "5px" })}
`

const Transition = styled.a`
color: #EDF5E1;
margin-top: 3px;
margin-bottom: 3px;
  &:active {
    color: #EDF5E1;
    font-size: 10px;
  }
`

const Icons = styled.div`

display: flex ;
align-items: center ;
justify-content: center;
flex-direction: column ;
${mobile({ flexDirection: "row" })}
`

const Navbar = () => {
    return (
        <Container>
            <LogoContainer>
                <Logo>AA.</Logo>
                <Icons>
                    <Transition href="https://github.com/aramic9778" target="_blank" style={{ textDecoration: "none" }}>
                        <Icon>
                            <GitHubIcon fontSize="small"></GitHubIcon>
                        </Icon>
                    </Transition>
                    <Transition href="https://www.linkedin.com/in/aramic97/" target="_blank" style={{ textDecoration: "none" }}>
                        <Icon>
                            <LinkedInIcon fontSize="small"></LinkedInIcon>
                        </Icon>
                    </Transition>
                    <Transition href="https://www.instagram.com/50dram/" target="_blank" style={{ textDecoration: "none" }}>
                        <Icon>
                            <InstagramIcon fontSize="small"></InstagramIcon>
                        </Icon>
                    </Transition>
                </Icons>
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