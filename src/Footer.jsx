import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from 'styled-components'
import "aos/dist/aos.css";

import { mobile, tablet } from './responsive';


const Container = styled.div`
 background-color: #05385B;
 display:  flex; 
 flex-direction: column;
 height: 300px;
 align-items: center;
 justify-content: center;


`
const Logo = styled.div`
    font-family: 'Fontdiner Swanky', cursive;
    
    color: #EDF5E1;
    font-size: 65px;
    
`

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    
    ${mobile({ display: "none" })}

`

const Icon = styled.div`
    margin: 15px;
    width: 50px;
    color: #EDF5E1;
    transition: all 0.5s ease;
    text-align: center ;
    padding: 5px;
    &:hover {
    cursor: pointer;
    background-color: #EDF5E1;
    border-radius: 8px ;
    color: #05385B;
   
  }
`

const Transition = styled.a`
color: #EDF5E1;
  &:active {
    color: #EDF5E1;
    font-size: 10px;
  }
`
const Text = styled.div`
font-size: 16px ;
color: #EDF5E1;
margin-bottom: 3px;
 text-align: center ;
 font-family: 'Special Elite', cursive;
 font-weight: 2 ;
 ${mobile({ margin: "5px" })}
 
`



const Footer = () => {

    return (
        <Container>



            <Logo>AA.</Logo>
            <IconContainer>
                <Transition href="https://github.com/aramic9778" target="_blank" style={{ textDecoration: "none" }}>
                    <Icon>
                        <GitHubIcon fontSize="large"></GitHubIcon>
                    </Icon>
                </Transition>
                <Transition href="https://www.linkedin.com/in/aramic97/" target="_blank" style={{ textDecoration: "none" }}>
                    <Icon>
                        <LinkedInIcon fontSize="large"></LinkedInIcon>
                    </Icon>
                </Transition>
                <Transition href="https://www.instagram.com/50dram/" target="_blank" style={{ textDecoration: "none" }}>
                    <Icon>
                        <InstagramIcon fontSize="large"></InstagramIcon>
                    </Icon>
                </Transition>
            </IconContainer>
            <Text>Made with love by using JavaScript(React), HTML, and CSS.</Text>
            <Text>© 2022 Aram Antonyan - Project can be used for learning processes</Text>
            <Text>Source code available in my GitHub</Text>

        </Container>
    )
}

export default Footer