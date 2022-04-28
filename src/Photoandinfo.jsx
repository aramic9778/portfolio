import React from 'react'
import styled from 'styled-components'
import logo from './react4.png'

import Typical from 'react-typical'
import './App.css'

const Container = styled.div`
 height: 100vh;
 background-color: #85dcba;
 border-top: 10px dashed white;
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
 width: 950px;
 height: 800px;
 border-radius: 50% ;
 margin: 100px;
 justify-content: center;
 align-items: center ;
 flex-direction: column;
 

`



const Text = styled.div`
font-family: 'Frijole', cursive;
color: #043237;
font-size: 40px;
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