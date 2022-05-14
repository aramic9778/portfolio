import React from 'react'
import styled from 'styled-components'
import logo from './react4.png'

import Typical from 'react-typical'
import './App.css'

const Container = styled.div`
 height: 105vh;
 background-color: #379683;
 border-top: 7px dashed #05385B;
 display: flex;
 justify-content: space-between;
 align-items: center;
 
`
const ImageContainer = styled.div`
    margin: 100px;
 
`

const TextContainer = styled.div`
 display: flex;
 background-color: #f5f5f5;
 width: 600px;
 height: 600px;
 border-radius: 50% ;
 box-shadow: 15px 15px 2px 1px rgba(0, 0, 0, .2);
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

 height: 650px ;
 width: auto;

 
`


const Photoandinfo = () => {

    return (
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
    )
}

export default Photoandinfo