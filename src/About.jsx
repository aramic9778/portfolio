import React, { useEffect } from 'react'
import styled from 'styled-components'
import logo3 from './images/IMG_1357.JPG'
import { Element } from 'react-scroll'
import Aos from "aos"
import "aos/dist/aos.css";

const Container = styled.div` 
 background-color: #05385B;
 display:  flex; 
 flex-direction: column;
 height: auto ;
 
`

const Title = styled.h1`
  color: #05385B;
  margin-bottom:15px;
  -webkit-text-stroke: 2.5px #EDF5E1;
  
  text-align: center;
  font-family: 'Special Elite', cursive;
  font-size: 60px;
`

const TextContainer = styled.div`
width: 800px;
display: flex;
align-items: center ;
justify-content: center ;
  
`

const ImageContainer = styled.div`
  margin: 30px;
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center ;
`

const TextandImage = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
  
`

const Text = styled.div`
position: absolute;
margin: 30px;
font-size: 28px ;
width: 700px;
color: #05385B;
text-align: left ;
font-weight: bold;
font-family: 'Special Elite', cursive;
font-weight: 2 ;  
`


const Image = styled.img`
position: absolute;
width: 600px;
object-fit: cover ;
border-radius: 11%;
`

const Image2 = styled.div`
box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
border-radius: 205px 25px 215px 15px/20px 235px 1px 255px;
width: 680px;
height: 480px;
background-color:  #EDF5E1;

`
const Image3 = styled.div`
box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
width: 750px;
height: 480px;
background-color:  #EDF5E1;

`



const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <Element id='about' name='about'>
            <Container>
                <Title data-aos="fade-up">ABOUT ME</Title>
                <TextandImage data-aos="fade-up">
                    <ImageContainer>
                        <Image src={logo3} />
                        <Image2></Image2>
                    </ImageContainer>
                    <TextContainer>
                        <Text>My name is Aram Antonyan, I am a front-end developer with the passion to become full stack developer very soon.
                            I have a bachelor's degree in Computer Science and Software Engineering from University of Washington in Bothell.
                            My short-term goal is to keep contributing to different projects to expand my skillset in web development industry.  </Text>
                        <Image3></Image3>
                    </TextContainer>
                </TextandImage>
            </Container>
        </Element>
    )
}

export default About