import React, { useEffect } from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import Divider from '@mui/material/Divider';
import logo from './images//cfcf.jpg'
import logo2 from './images/notepad3.jpg'
import logo4 from './images/disss.jpg'
import logo5 from './images/projects.jpg'
import './App.css'
import Aos from "aos"
import "aos/dist/aos.css";
import { Element } from 'react-scroll'
import { mobile, tablet } from './responsive';


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
  font-family: 'Indie Flower', cursive;;
  font-size: 60px;
  ${mobile({ fontSize: "40px", WebkitTextStroke: "1.5px #EDF5E1" })}
`

const ProjectContainer = styled.div`
    padding-bottom: 35px ;
    align-items: center ;
    display: flex;
    flex-direction: column;
    
`

const Info = styled.div`
  position: absolute; top: 1;
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
  ${mobile({ opacity: "1" })}
  ${tablet({ opacity: "1" })}


`
const Icon = styled.div`
 
  color: #EDF5E1;
  font-family: 'Indie Flower';
  font: cursive;
  margin: 10px;
  font-size: 30px ;
  ${mobile({ fontSize: "20px" })}



`
const Image = styled.img`
width: 800px;
height: 360px;
object-fit: cover ;
z-index: 2;
border-radius: 11%;
transition: all 0.5s ease;
${mobile({ opacity: "0.3", width: "300px", height: "200px" })}
${tablet({ opacity: "0.3", width: "550px", height: "300px" })}
`
const ImageContainer = styled.div`
 
 
 position: relative; 

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
color: #EDF5E1;
 text-align: center;
 margin-top: 20px ;
 font-weight: bold;
 font-family: 'Indie Flower', cursive;;
 font-weight: 2 ;
 ${mobile({ fontSize: "18px" })}
`


const Projects = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: auto ;
margin-bottom: 40px ;

 
`

const ProjectName = styled.h1`
color:#EDF5E1;
 text-align: left ;
 font-family: 'Indie Flower', cursive;;
 font-size: 35px ;
 ${mobile({ fontSize: "20px" })}
 
`

const ProjectDesc = styled.h2`
color: #EDF5E1;
 text-align: center ;
 font-size: 30px ;
 font-family: 'Indie Flower', cursive;;
 ${mobile({ fontSize: "15px" })}
 
`


const TextContainer = styled.div`
 
 
 
 
 width: 90%;
 

`

const Rowblocks = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between ;

`
const Block = styled.div`
text-align: center ;
width: 100%;
`


const IconContainer = styled.button`
cursor:pointer;
text-align: center;
background-color: Transparent;
margin: 10px;
border: solid 5px #EDF5E1;
box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
padding: 10px;
width: 320px; 
display: flex;
flex-direction: row ;
color: #EDF5E1;
align-items: center ;
transition: all 0.5s ease;
${mobile({ width: "200px", height: "70px" })}
  &:hover {
    width: 340px;
    ${mobile({ width: "250px" })}
  }
  &:active {
    box-shadow: 0px 0px 0px 0px hsla(0,0%,0%,.2);
  }
`
const Other = styled.div`

  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 15px;
  
  &:hover {
    
    font-size: 30px;
    
    
  }

`

const Transition = styled.a`
color: #EDF5E1;
&:hover {
    color: #EDF5E1;
  }
  &:active {
    color: #EDF5E1;
    font-size: 10px;

  }
  ${mobile({ fontSize: "15px" })}
  

`




const Project = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <Element id='projects' name='projects'>
            <Container id="projects">
                <Title data-aos="fade-up">
                    PROJECTS
                </Title>
                <Projects >

                    <ProjectContainer data-aos="fade-up">
                        <ProjectName>CrazyFingers Ecommerce Website</ProjectName>
                        <ImageContainer>
                            <Image src={logo}></Image>
                            <Info>
                                <Transition href="http://crazyfingers.herokuapp.com/" target="_blank" style={{ textDecoration: "none" }}>
                                    <IconContainer>
                                        <WebIcon fontSize="large"></WebIcon>
                                        <Divider orientation="vertical" flexItem style={{ margin: "15px", background: "#EDF5E1", borderRightWidth: 1.1 }} />
                                        <Icon>Link to Project</Icon>
                                    </IconContainer>
                                </Transition>
                                <Transition href="https://github.com/aramic9778/eCom2" target="_blank" style={{ textDecoration: "none" }}>
                                    <IconContainer>
                                        <GitHubIcon fontSize="large"></GitHubIcon>
                                        <Divider orientation="vertical" flexItem style={{ margin: "15px", background: "#EDF5E1", borderRightWidth: 1.1 }} />
                                        <Icon>Source Code</Icon>
                                    </IconContainer>
                                </Transition>
                            </Info>
                        </ImageContainer>


                    </ProjectContainer>
                    <ProjectContainer data-aos="fade-up">
                        <ProjectName>NoteTaker</ProjectName>
                        <ImageContainer>
                            <Image src={logo2} />
                            <Info>
                                <Transition href="https://takenotes.pw/" target="_blank" style={{ textDecoration: "none" }}>
                                    <IconContainer>
                                        <WebIcon fontSize="large"></WebIcon>
                                        <Divider orientation="vertical" flexItem style={{ margin: "15px", background: "#EDF5E1", borderRightWidth: 1.1 }} />
                                        <Icon>Link to Project</Icon>
                                    </IconContainer>
                                </Transition>
                                <Transition href="https://github.com/aramic9778/NoteTaker_App" target="_blank" style={{ textDecoration: "none" }}>
                                    <IconContainer>
                                        <GitHubIcon fontSize="large"></GitHubIcon>
                                        <Divider orientation="vertical" flexItem style={{ margin: "15px", background: "#EDF5E1", borderRightWidth: 1.1 }} />
                                        <Icon>Source Code</Icon>
                                    </IconContainer>
                                </Transition>
                            </Info>
                        </ImageContainer>
                    </ProjectContainer>
                    <ProjectContainer data-aos="fade-up">
                        <ProjectName>Disassembler Project</ProjectName>
                        <ImageContainer>
                            <Image src={logo4} />
                            <Info>
                                <Transition href="https://github.com/aramic9778/Disassembler_x64" target="_blank" style={{ textDecoration: "none" }}>
                                    <IconContainer>
                                        <GitHubIcon fontSize="large"></GitHubIcon>
                                        <Divider orientation="vertical" flexItem style={{ margin: "15px", background: "#EDF5E1", borderRightWidth: 1.1 }} />
                                        <Icon>Source Code</Icon>
                                    </IconContainer>
                                </Transition>
                            </Info>
                        </ImageContainer>
                    </ProjectContainer>
                    <ProjectContainer data-aos="fade-up">
                        <ProjectName>Other School Projects</ProjectName>

                        <Image src={logo5} />


                        <TextContainer>


                            <Text>
                                This section includes all the rest projects that has been done by me during studying.
                            </Text>
                            <Rowblocks>
                                <Block>
                                    <ProjectDesc>Data Structures and Algorithms Projects:</ProjectDesc>
                                    <Text>
                                        <Transition href="https://github.com/aramic9778/CSS342/tree/main/Project1_Library" target="_blank" style={{ textDecoration: "none" }}><Other>✓ <GitHubIcon fontSize="large"></GitHubIcon> Library </Other></Transition>
                                        <Transition href="https://github.com/aramic9778/CSS342/tree/main/Project2_Timespan" target="_blank" style={{ textDecoration: "none" }}><Other>✓ <GitHubIcon fontSize="large"></GitHubIcon> Timespan </Other></Transition>
                                        <Transition href="https://github.com/aramic9778/CSS342/tree/main/Project3_Maze" target="_blank" style={{ textDecoration: "none" }}><Other>✓ <GitHubIcon fontSize="large"></GitHubIcon> Maze </Other></Transition>
                                        <Transition href="https://github.com/aramic9778/CSS342/tree/main/Project4_SkipList" target="_blank" style={{ textDecoration: "none" }}><Other>✓ <GitHubIcon fontSize="large"></GitHubIcon> SkipList </Other></Transition>
                                        <Transition href="https://github.com/aramic9778/CSS342/tree/main/Project5_Banking" target="_blank" style={{ textDecoration: "none" }}><Other>✓ <GitHubIcon fontSize="large"></GitHubIcon> Banking Console </Other></Transition>
                                        <Transition href="https://github.com/aramic9778/CSS343/tree/main/Project1_SVG" target="_blank" style={{ textDecoration: "none" }}><Other>✓ <GitHubIcon fontSize="large"></GitHubIcon> SVG </Other></Transition>
                                        <Transition href="https://github.com/aramic9778/CSS343/tree/main/Project2_Autocomplete" target="_blank" style={{ textDecoration: "none" }}><Other>✓ <GitHubIcon fontSize="large"></GitHubIcon> Autocomplete </Other></Transition>
                                        <Transition href="https://github.com/aramic9778/CSS343/tree/main/Project3_Graph" target="_blank" style={{ textDecoration: "none" }}><Other>✓ <GitHubIcon fontSize="large"></GitHubIcon> Graph </Other></Transition>
                                        <Transition href="https://github.com/aramic9778/CSS343/tree/main/Project5_Movie_Library" target="_blank" style={{ textDecoration: "none" }}><Other>✓ <GitHubIcon fontSize="large"></GitHubIcon> Movie Library </Other></Transition>
                                    </Text>
                                </Block>
                                <Block>
                                    <ProjectDesc>Operating Systems Projects:</ProjectDesc>
                                    <Text>
                                        <Transition href="https://github.com/aramic9778/CSS430/tree/main/Project1_Unix_Shell" target="_blank" style={{ textDecoration: "none" }}><Other>✓ <GitHubIcon fontSize="large"></GitHubIcon> Unix Shell </Other></Transition>
                                        <Transition href="https://github.com/aramic9778/CSS430/tree/main/Project2_Multi-Threaded_Sudoku_Validator" target="_blank" style={{ textDecoration: "none" }}><Other>✓ <GitHubIcon fontSize="large"></GitHubIcon> Multi-Threaded Sudoku </Other></Transition>
                                        <Transition href="https://github.com/aramic9778/CSS430/tree/main/Project3_Scheduling_Algorithms" target="_blank" style={{ textDecoration: "none" }}><Other>✓ <GitHubIcon fontSize="large"></GitHubIcon> Scheduling Algorithms </Other></Transition>
                                        <Transition href="https://github.com/aramic9778/CSS430/tree/main/Project4_Contiguous_Memory_Allocation" target="_blank" style={{ textDecoration: "none" }}><Other>✓ <GitHubIcon fontSize="large"></GitHubIcon> Contiguous Memory Allocation </Other></Transition>
                                        <Transition href="https://github.com/aramic9778/CSS430/tree/main/Project5_BFS_a_Unix_like_File_System" target="_blank" style={{ textDecoration: "none" }}><Other>✓ <GitHubIcon fontSize="large"></GitHubIcon> File System </Other></Transition>
                                    </Text>
                                </Block>
                            </Rowblocks>
                        </TextContainer>
                    </ProjectContainer>
                </Projects>
            </Container>
        </Element>
    )
}
export default Project