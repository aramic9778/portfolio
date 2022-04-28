import React from 'react'
import styled from 'styled-components'

import logo from './cfcf.jpg'

import './App.css'

const Container = styled.div`
 background-color: #f3dcd4;
 border-top: 10px dashed white;
 display:  flex;
 flex-direction: column;
 height: auto ;
`

const Title = styled.h1`
  color: white;
  text-align: center ;
  font-family: 'Frijole', cursive;
  font-size: 52px;
`

const ProjectContainer = styled.div`
  
  
 
    display: flex;
    flex-direction: row;
    margin: 20px;
  
  
 
`



const TextContainer = styled.div`
 
 margin-left: 20px;
 width: 30%;
 font-size: 20px;
 color: #043237;

`
const Info = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  transition: all 0.5s ease;
  align-items: center; 
  justify-content: center;
 
`
const Icon = styled.div`
 
  color: black;
  cursor:pointer;
   
  font-size: 40px ;

  
`
const Image = styled.img`
width: 100%;
z-index: 2;
border-radius: 10%;
transition: all 0.5s ease;

 
`
const ImageContainer = styled.div`
 
 width: 800px;
 position: relative;
 height: 400px ;
&:hover ${Image}{
    opacity: 0.3;
  }
  &:hover ${Info}{
    opacity: 1;
  }
  
`





const Text = styled.div`
font-family: 'Frijole', cursive;
color: #043237;
font-size: 40px;
margin: 5px; 
justify-content: center ;
 
`


const Projects = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: auto ;
margin: 20px;

 
`





const Project = () => {

    return (
        <Container>

            <Title>
                Projects
            </Title>
            <Projects>

                <ProjectContainer>
                    <ImageContainer>
                        <Image src={logo}></Image>
                        <Info>
                            <Icon>Click to View...</Icon>
                        </Info>
                    </ImageContainer>
                    <TextContainer>
                        This is my first ECommerce Project. I created it by using HTML, CSS, JavaScript with the React/Redux.
                        During implementation, I also used tools like MongoDB, Firebase, Stripe, EmailJS and Postman. Website fully responsive for the most popular devices. <br></br>
                        API:
                        <ul> ✓ Adding to Cart</ul>
                        <ul> ✓ Deleting from Cart</ul>
                        <ul> ✓ Adding to Favorites</ul>
                        <ul> ✓ Deleting from Favorites</ul>
                        <ul> ✓ Changing quantity in Cart and on Product Page</ul>
                        <ul> ✓ Adding to Cart from Favorites</ul>
                        <ul> ✓ Get a welcome message on Email</ul>
                        <ul> ✓ Sort by Price and Upload Date</ul>
                        <ul> ✓ Make a Payment by using Stripe Library(in test mode, user won't be charged)</ul>
                    </TextContainer>
                </ProjectContainer>
                <ProjectContainer>
                    <ImageContainer>
                        <Image src={logo} />
                        <Info>
                            <Icon>Click to View...</Icon>
                        </Info>
                    </ImageContainer>
                    <TextContainer>
                        This is my first ECommerce Portfolio Project. I created it by using HTML, CSS, JavaScript with the React/Redux.
                        During implementation, I also used tools like MongoDB, Firebase, Stripe, EmailJS and Postman. Website fully responsive for the most popular devices.
                    </TextContainer>
                </ProjectContainer>
                <ProjectContainer>
                    <ImageContainer>
                        <Image src={logo}></Image>
                        <Info>
                            <Icon>Click to View...</Icon>
                        </Info>
                    </ImageContainer>
                    <TextContainer>
                        This is my first ECommerce Portfolio Project. I created it by using HTML, CSS, JavaScript with the React/Redux.
                        During implementation, I also used tools like MongoDB, Firebase, Stripe, EmailJS and Postman. Website fully responsive for the most popular devices.
                    </TextContainer>
                </ProjectContainer>
            </Projects>
        </Container>
    )
}
export default Project