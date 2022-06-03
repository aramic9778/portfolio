import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logo from './images/web.png'

import Typical from 'react-typical'
import './App.css'
import { Element } from 'react-scroll'
import { mobile, tablet } from './responsive';

const Container = styled.div`
 height: 95vh;
 background-color: #05385B;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 ${mobile({ flexDirection: "column" })}
 ${tablet({ flexDirection: "column" })}

`
const ImageContainer = styled.div`
    margin: 100px;
    ${mobile({ margin: "0px" })}
 
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
 ${mobile({ width: "300px", height: "200px", marginLeft: "0px", borderRadius: "0%" })}
 ${tablet({ width: "600px", height: "300px", marginLeft: "0px", borderRadius: "0%" })}

`



const Text = styled.div`
font-family: 'Indie Flower', cursive;;
color: #05385B;
font-size: 33px;
margin: 5px; 
${mobile({ fontSize: "16px" })}


`
const Image = styled.img`

 height: 550px;
${mobile({ height: "300px" })}
${tablet({ height: "400px" })}

 
`


const Photoandinfo = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 450);

    {/* Performs similarly to componentDidMount in classes */ }
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 450;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);




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
                        className={`${isMobile ? "typic" : "typic2"}`}
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