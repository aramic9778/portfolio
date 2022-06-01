import React, { useState, useEffect } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import BadgeIcon from '@mui/icons-material/Badge';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import InterestsIcon from '@mui/icons-material/Interests';
import { keyframes } from "styled-components"
import styled from 'styled-components'
import { Element } from 'react-scroll'
import './App.css'
import Aos from "aos"
import "aos/dist/aos.css";



const Container = styled.div`
 background-color: #05385B;
 display:  flex;
 flex-direction: column;
 
 align-items: center ;
`

const Title = styled.h1`
  color: #05385B;
  margin-bottom:15px;
  -webkit-text-stroke: 2.5px #EDF5E1;
  
  text-align: center;
  font-family: 'Special Elite', cursive;
  font-size: 60px;
`

const Options = styled.div`
display: flex ;
flex-direction: column ;
justify-content: center;
align-items: center ;
border-right: 4px solid #05385B;
width: 25%auto;


  
`

const Info = styled.div`
  width: 80%auto;
  display: flex;
  justify-content: center;
  align-items: center ;
  
  
`

const InfoandOptions = styled.div`
  display: flex;
  flex-direction: row;
  border: solid;
  width: 60%;

  height: 600px ;
  margin: 40px;
  background-color: #EDF5E1;
  border-color: #05385B;
  box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.7);
  
`

const Education = styled.div`
  display: flex;
  flex-direction: column ;
  justify-content: space-evenly;
  
  
  
`

const Employment = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  
`

const Skills = styled.div`
  
  
  display: flex;
  flex-direction: row ;
  
  
 
 

`

const Interests = styled.div`
  display: flex;
  flex-direction: column ;
  justify-content: space-evenly;
  
`

const List = styled.div`
  color: #05385B;
  margin-bottom: 5px;
  font-size: 15px;
  font-family: 'Special Elite', cursive;
  
`

const Place = styled.h1`
  color: #05385B;
  margin-bottom: 1px;
  font-size: 20px;
  font-family: 'Special Elite', cursive;
  border-top: 4px solid #05385B;
  padding-top: 4px;
  
  
`

const Location = styled.h2`
  color: #05385B;
  margin-bottom: 10px;
  font-size: 17px;
  font-family: 'Special Elite', cursive;
  border-bottom: 1px solid #05385B;
  padding-bottom: 2px;
  border-top: 1px solid #05385B;
  padding-top: 2px;
  text-align: center ;
  
`

const Date = styled.div`
  font-size: 13px;
  background-color: #05385B;
  color: #EDF5E1;
  font-family: 'Special Elite', cursive;
  border-radius: 15px;
  padding: 8px;
  margin: 10px;
  
`

const SchoolandDate = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center ;
  margin-bottom: 10px;
`

const SchoolName = styled.h1`
  color: #05385B;
  margin-bottom: 1px;
  font-size: 20px;
  font-family: 'Special Elite', cursive;
  
  
`

const Degree = styled.div`
  font-size: 16px;
  color: #05385B;
  font-family: 'Special Elite', cursive;
  
`

const Gpa = styled.div`
  margin-top: 5px;
  font-weight: bold ;
  font-size: 14px;
  color: #05385B;
  font-family: 'Special Elite', cursive;
`

const DegreeandGpa = styled.div`
  width: 70%;
  
`
const Unit = styled.div`
  margin: 10px;
  border-bottom: 1px solid #05385B;
  padding-bottom: 15px;
  border-top: 1px solid #05385B;
  padding-top: 15px;
  
`

const SkillName = styled.div`
  position: absolute;
  top: -30px;
  left: 0px;
  color: #05385B;
  font-size: 15px;
  width:210px;
  
  
  font-family: 'Special Elite', cursive;
        
  
`
const fillBars = keyframes`
  from {
    width: 0;
  }

  to {
    width: ${props => props.procent};
  }
`;

const Level80 = styled.span`
  
         display: block;
         height: 9px;
         border-radius: 3px ;
         width: ${props => props.procent}; 
         background-color: #05385B;
          animation: ${fillBars} 1.5s ease-in-out ;
`

const SkillContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  border-radius: 5px ;
  width: 200px;
  background-color: transparent;
  height: 10px;
  margin: 60px;
  box-shadow: inset 0px 1px 1px rgba(0,0,0,0.7),
    0px 1px rgba(255,255,255,1);
  
`

const Option = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #05385B;
  font-family: 'Special Elite', cursive;
  background-color: transparent;
  width: 100%;
  height: 60px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center ;
  cursor: pointer;
  transition: all 0.6s ease;
  &:hover {
    color: #EDF5E1;
    background-color: #05385B;
  }
  &:focus {
    color: #EDF5E1;
    background-color: #05385B;
    outline: 0;
  }

`

const Block1 = styled.div`
  
  
`
const Block2 = styled.div`
  
  
`

const Interest = styled.div`
  color: #05385B;
  margin-bottom: 1px;
  font-size: 20px;
  font-family: 'Special Elite', cursive;
  width: 70%;
`

const InterestUnit = styled.div`
   display: flex;
  justify-content: space-between;
  align-items: center ;
  margin: 10px;
  border-bottom: 1px solid #05385B;
  padding-bottom: 15px;
  border-top: 1px solid #05385B;
  padding-top: 15px;
  
`



const Resume = () => {
  const [section, setSection] = useState('education');
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  function handleClick(e) {
    e.preventDefault();
    setSection(e.target.value);
  }

  return (
    <Element id='resume' name='resume'>
      <Container>
        <Title data-aos="fade-up">VIRTUAL RESUME</Title>
        <InfoandOptions data-aos="fade-up">
          <Options>
            <Option value='education' id='education' autoFocus onClick={handleClick}><SchoolIcon></SchoolIcon> Education</Option>
            <Option value='employment' id='employment' onClick={handleClick}><WorkIcon></WorkIcon> Employment</Option>
            <Option value='skills' id='skills' onClick={handleClick}><BadgeIcon></BadgeIcon> Skills</Option>
            <Option value='interests' id='interests' onClick={handleClick}><InterestsIcon></InterestsIcon> Interests/Volunteering</Option>
          </Options>

          <Info>
            {section === 'education' &&
              <Education>
                <Unit>
                  <SchoolandDate> <SchoolName> Interlake High School </SchoolName><Date>2016 - 2018</Date> </SchoolandDate>
                </Unit>
                <Unit>
                  <SchoolandDate> <SchoolName> Cascadia College </SchoolName><Date>2018 - 2020</Date> </SchoolandDate>
                  <DegreeandGpa><Degree>Associate in Integrated Studies DTA </Degree>  <Gpa>GPA: 3.89</Gpa></DegreeandGpa>
                </Unit>
                <Unit>
                  <SchoolandDate> <SchoolName> University of Washington Bothell  </SchoolName><Date>2020 - 2022</Date> </SchoolandDate>
                  <DegreeandGpa><Degree>B.S. Computer Science and Software Engineering
                    Coursework: Data Structures and Algorithms I, II </Degree>  <Gpa>GPA: 3.8</Gpa></DegreeandGpa>
                </Unit>


              </Education>
            }
            {section === 'employment' &&
              <Employment>
                <Place> <WorkIcon></WorkIcon> Frontend Developer Intern at BusySquirrels (2021 June-2021 September)</Place>
                <Location> <LocationOnIcon></LocationOnIcon> New York, United States (Remote)</Location>
                <List><DoneOutlineIcon fontSize='small'></DoneOutlineIcon> Maintaining a website and Google Chrome extension</List>
                <List><DoneOutlineIcon fontSize='small'></DoneOutlineIcon> Working on React components, events, animations, keys, Redux, forms</List>
                <List><DoneOutlineIcon fontSize='small'></DoneOutlineIcon> Developed a switcher to turn on/off the popup message with shopping tips and cashbacks every ten hours for each shopping website</List>
                <List><DoneOutlineIcon fontSize='small'></DoneOutlineIcon> Developed a feature to control popup off-time for particular website by using indexedDB and reset these setting in the menu by deleting a website from chrome database</List>
                <Place> <WorkIcon></WorkIcon> Incoming Software Engineer Intern at Nordstrom (2022 June)</Place>
                <Location><LocationOnIcon></LocationOnIcon> Washington, United States</Location>
              </Employment>
            }
            {section === 'skills' && <Skills>
              <Block1>
                <SkillContainer>
                  <SkillName><DoneOutlineIcon fontSize='small'></DoneOutlineIcon> HTML5</SkillName>
                  <Level80 procent="190px"></Level80>
                </SkillContainer>
                <SkillContainer>
                  <SkillName><DoneOutlineIcon fontSize='small'></DoneOutlineIcon> CSS3</SkillName>
                  <Level80 procent="185px"></Level80>
                </SkillContainer>
                <SkillContainer>
                  <SkillName><DoneOutlineIcon fontSize='small'></DoneOutlineIcon> JavaScript(React/Redux)</SkillName>
                  <Level80 procent="170px"></Level80>
                </SkillContainer>
                <SkillContainer>
                  <SkillName><DoneOutlineIcon fontSize='small'></DoneOutlineIcon> Git</SkillName>
                  <Level80 procent="165px"></Level80>
                </SkillContainer>
              </Block1>
              <Block2>
                <SkillContainer>
                  <SkillName><DoneOutlineIcon fontSize='small'></DoneOutlineIcon> NodeJS</SkillName>
                  <Level80 procent="140px"></Level80>
                </SkillContainer>
                <SkillContainer>
                  <SkillName><DoneOutlineIcon fontSize='small'></DoneOutlineIcon> AWS</SkillName>
                  <Level80 procent="120px"></Level80>
                </SkillContainer>
                <SkillContainer>
                  <SkillName><DoneOutlineIcon fontSize='small'></DoneOutlineIcon> C++/C</SkillName>
                  <Level80 procent="163px"></Level80>
                </SkillContainer>
                <SkillContainer>
                  <SkillName><DoneOutlineIcon fontSize='small'></DoneOutlineIcon> MongoDB</SkillName>
                  <Level80 procent="150px"></Level80>
                </SkillContainer>
              </Block2>
            </Skills>}
            {section === 'interests' && <Interests>
              <InterestUnit><Interest>Founder of educational Discord channel for technical interview preparing</Interest><Date>2021 - 2022</Date></InterestUnit>
              <InterestUnit><Interest>Math tutor in algebra and geometry</Interest><Date>2014 - 2016</Date></InterestUnit>
              <InterestUnit><Interest>Volunteered at Armenian Church</Interest><Date>2016 - 2020</Date></InterestUnit>
            </Interests>}

          </Info>
        </InfoandOptions>
      </Container>
    </Element>

  )
}
export default Resume