import React from 'react'
import styled from 'styled-components'
import logo from './images/web.png'

import Typical from 'react-typical'
import './App.css'
import { Element } from 'react-scroll'

const Container = styled.div`
 height: 95vh;
 background-color: #05385B;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 
`
const ImageContainer = styled.div`
    margin: 100px;
 
`

const TextContainer = styled.div`
 display: flex;
 background-color: white;
 width: 600px;
 height: 600px;
 border-radius: 50% ;
 box-shadow: 15px 15px 2px 1px hsla(0,0%,0%,.3);
 justify-content: center;
 align-items: center ;
 flex-direction: column;
 margin-left: 50px ;

`



const Text = styled.div`
font-family: 'Special Elite', cursive;
color: #05385B;
font-size: 33px;
margin: 5px; 

 
`
const Image = styled.img`

 height: 550px;


 
`


const Photoandinfo = () => {

    return (
        <Element id='home' name='home'>
            <Container>

                <TextContainer>
                    <Text>
                        Hey, there!
                    </Text>
                    <Text>
                        I'm Aram Antonyan
                    </Text>

                    <Typical
                        className="typic"
                        loop={Infinity}
                        steps={[
                            'Designer✏️',
                            1000,
                            'Frontend Developer😍',
                            1000,
                            'Web Developer🕸️',
                            1000,
                            'Fullstack Developer👨‍💻(goals😴💭)',
                            1000,
                        ]}
                    />
                </TextContainer>


                <ImageContainer>

                    <Image src={logo}>

                    </Image>
                </ImageContainer>
            </Container>
        </Element>
    )
}

export default Photoandinfo