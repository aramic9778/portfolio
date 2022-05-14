import React from 'react'
import styled from 'styled-components'
import { Link } from "react-scroll";
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import Divider from '@mui/material/Divider';
import logo from './cfcf.jpg'
import logo2 from './notepad3.jpg'
import logo3 from './IMG_1354.JPG'
import logo4 from './disss.jpg'
import logo5 from './projects.jpg'
import './App.css'

const Container = styled.div`
 background-color: #5cdb95;
 border-top: 7px dashed #05385B;
 display:  flex; 
 flex-direction: column;
 height: auto ;
`

const Title = styled.h1`
  color: #05385B;
  margin-bottom:15px;
  
  
  text-align: center ;
  font-family: 'Special Elite', cursive;
  font-size: 60px;
`

const ProjectContainer = styled.div`
  
    align-items: center ;
    
    display: flex;
    flex-direction: column;
    
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
  display: flex;
  flex-direction: column;
  
 
`
const Icon = styled.div`
 
  color: #05385B;
  
  margin: 10px;
  font-size: 30px ;
  

  
`
const Image = styled.img`
width: 800px;

object-fit: cover ;
z-index: 2;
border-radius: 11%;
transition: all 0.5s ease;


 
`
const ImageContainer = styled.div`
 
 
 position: relative;
 box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
 display: flex ;
 
  &:hover ${Image}{
    opacity: 0.3;
  }
  &:hover ${Info}{
    opacity: 1;
  }
  
`





const Text = styled.div`
font-size: 28px ;
color: #05385B;
 text-align: left ;
 font-weight: bold;
 font-family: 'Special Elite', cursive;
 font-weight: 2 ;
`


const Projects = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: auto ;
margin-bottom: 40px ;

 
`

const ProjectName = styled.h1`
color: #EDF5E1;
 text-align: left ;
 font-family: 'Special Elite', cursive;
`

const ProjectDesc = styled.h2`
color: #EDF5E1;
 text-align: left ;
 font-size: 35px ;
 font-family: 'Special Elite', cursive;
`


const TextContainer = styled.div`
 
 margin-left: 20px;
 width: 60%;
 text-align: center ;


 
 

`

const Rowblocks = styled.div`
 
display: flex;
flex-direction: row;
justify-content: space-between;

 
 

`
const Block = styled.div`
 


 
 

`
const IconContainer = styled.div`
cursor:pointer;
text-align: center;
margin: 10px;
border: solid 5px #05385B;
box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
padding: 10px;
width: 300px; 
display: flex;
flex-direction: row ;
color: #05385B;
 
 
align-items: center ;
`





const Project = () => {

    return (
        <Container id="projects">

            <Title>
                PROJECTS
            </Title>
            <Projects>

                <ProjectContainer>
                    <ProjectName>CrazyFingers Ecommerce Website</ProjectName>
                    <ImageContainer>

                        <Image src={logo}></Image>
                        <Info>
                            <IconContainer>
                                <WebIcon fontSize="large"></WebIcon>
                                <Divider orientation="vertical" flexItem style={{ margin: "15px", background: "#05385B", borderRightWidth: 1.1 }} />
                                <Icon>Link to Project</Icon>
                            </IconContainer>
                            <IconContainer>
                                <GitHubIcon fontSize="large"></GitHubIcon>
                                <Divider orientation="vertical" flexItem style={{ margin: "15px", background: "#05385B", borderRightWidth: 1.1 }} />
                                <Icon>Source Code</Icon>
                            </IconContainer>
                        </Info>
                    </ImageContainer>

                    <TextContainer>

                        <ProjectDesc>Project Description:</ProjectDesc>
                        <Text>
                            This is my first ECommerce Project. I created it by using HTML, CSS, JavaScript with the React/Redux.
                            During implementation, I also used tools like MongoDB, Firebase, Stripe, EmailJS and Postman. Website fully responsive for the most popular devices.
                        </Text>

                        <ProjectDesc>Application Programming Interface:</ProjectDesc>
                        <Text>
                            ✓ Adding to Cart<br></br>
                            ✓ Deleting from Cart<br></br>
                            ✓ Adding to Favorites<br></br>
                            ✓ Deleting from Favorites<br></br>
                            ✓ Changing quantity in Cart and on Product Page<br></br>
                            ✓ Adding to Cart from Favorites<br></br>
                            ✓ Get a welcome message on Email<br></br>
                            ✓ Sort by Price and Upload Date<br></br>
                            ✓ Make a Payment by using Stripe Library(in test mode, user won't be charged)<br></br>
                        </Text>
                    </TextContainer>
                </ProjectContainer>
                <ProjectContainer>
                    <ProjectName>NoteTaker</ProjectName>
                    <ImageContainer>
                        <Image src={logo2} />
                        <Info>
                            <IconContainer>
                                <WebIcon fontSize="large"></WebIcon>
                                <Divider orientation="vertical" flexItem style={{ margin: "15px", background: "#05385B", borderRightWidth: 1.1 }} />
                                <Icon>Link to Project</Icon>
                            </IconContainer>
                            <IconContainer>
                                <GitHubIcon fontSize="large"></GitHubIcon>
                                <Divider orientation="vertical" flexItem style={{ margin: "15px", background: "#05385B", borderRightWidth: 1.1 }} />
                                <Icon>Source Code</Icon>
                            </IconContainer>
                        </Info>
                    </ImageContainer>
                    <TextContainer>

                        <ProjectDesc>Project Description:</ProjectDesc>
                        <Text>
                            This is my first ECommerce Project. I created it by using HTML, CSS, JavaScript with the React/Redux.
                            During implementation, I also used tools like MongoDB, Firebase, Stripe, EmailJS and Postman. Website fully responsive for the most popular devices.
                        </Text>

                        <ProjectDesc>Application Programming Interface:</ProjectDesc>
                        <Text>
                            ✓ Adding to Cart<br></br>
                            ✓ Deleting from Cart<br></br>
                            ✓ Adding to Favorites<br></br>
                            ✓ Deleting from Favorites<br></br>
                            ✓ Changing quantity in Cart and on Product Page<br></br>
                            ✓ Adding to Cart from Favorites<br></br>
                            ✓ Get a welcome message on Email<br></br>
                            ✓ Sort by Price and Upload Date<br></br>
                            ✓ Make a Payment by using Stripe Library(in test mode, user won't be charged)<br></br>
                        </Text>
                    </TextContainer>
                </ProjectContainer>
                <ProjectContainer>
                    <ProjectName>Disassembler Project</ProjectName>
                    <ImageContainer>
                        <Image src={logo4} />
                        <Info>
                            <IconContainer>
                                <GitHubIcon fontSize="large"></GitHubIcon>
                                <Divider orientation="vertical" flexItem style={{ margin: "15px", background: "#05385B", borderRightWidth: 1.1 }} />
                                <Icon>Source Code</Icon>
                            </IconContainer>
                        </Info>
                    </ImageContainer>
                    <TextContainer>

                        <ProjectDesc>Project Description:</ProjectDesc>
                        <Text>
                            Dissassembler is a program that converts a memory image of instructions and data back to 68000 assembly language and output the disassembled code to the display. Program has been written from the start in 68000 assembly language.
                        </Text>
                        <Rowblocks>
                            <Block>
                                <ProjectDesc>Covered Effective Addressing Modes:</ProjectDesc>
                                <Text>
                                    ✓ Data Register Direct<br></br>
                                    ✓ Address Register Direct<br></br>
                                    ✓ Address Register Indirect<br></br>
                                    ✓ Immediate Data<br></br>
                                    ✓ Address Register Indirect with Post incrementing<br></br>
                                    ✓ Address Register Indirect with Pre decrementing<br></br>
                                    ✓ Absolute Long Address<br></br>
                                    ✓ Absolute Word Address<br></br>
                                </Text>
                            </Block>
                            <Block>
                                <ProjectDesc>Covered OP codes:</ProjectDesc>
                                <Text>
                                    ✓ NOP<br></br>
                                    ✓ MOVE, MOVEQ, MOVEM, MOVEA<br></br>
                                    ✓ ADD, ADDA, ADDQ<br></br>
                                    ✓ SUB, LEA, BRA, JSR, RTS<br></br>
                                    ✓ AND, OR, NOT<br></br>
                                    ✓ LSL, LSR, ASL, ASR<br></br>
                                    ✓ ROL,ROR<br></br>
                                    ✓ Bcc (BGT, BLE, BEQ)<br></br>
                                </Text>
                            </Block>
                        </Rowblocks>
                    </TextContainer>
                </ProjectContainer>
                <ProjectContainer>
                    <ProjectName>Other School Projects</ProjectName>
                    <ImageContainer>
                        <Image src={logo5} />
                        <Info>
                            <Icon>Click to View...</Icon>
                        </Info>
                    </ImageContainer>
                    <TextContainer>

                        <ProjectDesc>Projects Description:</ProjectDesc>
                        <Text>
                            This section includes all the rest projects that has been done by me during studying.
                        </Text>
                        <Rowblocks>
                            <Block>
                                <ProjectDesc>Data Structures and Algos Projects:</ProjectDesc>
                                <Text>
                                    ✓ Library<br></br>
                                    ✓ Timespan<br></br>
                                    ✓ Adding to Favorites<br></br>
                                    ✓ Maze<br></br>
                                    ✓ SkipList<br></br>
                                    ✓ Banking Console<br></br>
                                    ✓ SVG<br></br>
                                    ✓ Autocomplete<br></br>
                                    ✓ Graph<br></br>
                                    ✓ Movie Library<br></br>
                                </Text>
                            </Block>
                            <Block>
                                <ProjectDesc>Operating Systems Projects:</ProjectDesc>
                                <Text>
                                    ✓ Unix Shell<br></br>
                                    ✓ Multi-Threaded Sudoku<br></br>
                                    ✓ Scheduling Algorithms<br></br>
                                    ✓ Contiguous Memory Allocation<br></br>
                                    ✓ File System<br></br>
                                </Text>
                            </Block>
                        </Rowblocks>
                    </TextContainer>
                </ProjectContainer>
            </Projects>
        </Container>
    )
}
export default Project