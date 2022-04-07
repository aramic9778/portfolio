import React from 'react'
import styled from 'styled-components'
import logo from './react4.png'
import logo2 from './react4.png'


const Container = styled.div`
 height: 80vh;
 background-color: #0cd8a3;
 border-top: 8px dotted white;
 display: flex;
 justify-content: space-between;
 align-items: center;
 
`
const ImageContainer = styled.div`
    padding-right: 100px;
 
`

const TextContainer = styled.div`
 display: flex;
 padding-left: 100px;
 justify-content: center;
 flex-direction: column;
 

`

const Text = styled.div`
font-family: 'Frijole', cursive;
color: #043237;
font-size: 60px;

 
`
const Image = styled.img`

 height: 550px ;
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
                <Text>
                    Frontend Developer...
                </Text>
            </TextContainer>
            <ImageContainer>

                <Image src={logo}>

                </Image>
            </ImageContainer>
        </Container>
    )
}

export default Photoandinfo