import React, { useRef, useState, useEffect } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WebIcon from '@mui/icons-material/Web';
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import swal from 'sweetalert';
import validator from 'validator'
import Aos from "aos"
import "aos/dist/aos.css";
import { Element } from 'react-scroll'
import { mobile, tablet } from './responsive';

const Container = styled.div`
 background-color: #05385B;
 display:  flex; 
 flex-direction: row;
 
 justify-content: space-evenly;
 ${mobile({ flexDirection: "column", height: "auto" })}
 ${tablet({ flexDirection: "column", height: "auto" })}

`
const TextH = styled.h1`
 
color: #EDF5E1;
margin-bottom: 3px;
 
 font-family: 'Special Elite', cursive;
 font-weight: 2 ;

`
const Text = styled.div`
font-size: 16px ;
color: #EDF5E1;
margin-bottom: 15px;
margin-top: 15px ;
 text-align: left ;
 font-family: 'Special Elite', cursive;
 font-weight: 2 ;
 ${mobile({ textAlign: "center" })}
`

const ContactInfoBlock = styled.div` 
 display: flex;
 flex-direction: column;
 ${mobile({ alignItems: "center", justifyContent: "center" })}
 ${tablet({ margin: "30px" })}

`
const ContactFormBlock = styled.form`
 display: flex;
 flex-direction: column;
 ${mobile({ alignItems: "center", justifyContent: "center" })}
 ${tablet({ margin: "30px" })}
`
const NameandEmail = styled.div`
${mobile({ display: "flex", alignItems: "center", flexDirection: "column" })}


`

const MessageInput = styled.textarea`
color: #EDF5E1;
height: 100px;
border-color: #EDF5E1;
padding: 10px;
margin-bottom: 20px;
margin-top: 20px;
margin-right: 20px;
background-color: transparent;
::placeholder { 
  color: #EDF5E1;
  opacity: 0.8;
}
resize: none ;
`

const RegularInput = styled.input`
color: #EDF5E1;
border-color: #EDF5E1;
padding: 10px;
margin-bottom: 20px;
margin-top: 20px;
margin-right: 20px;
background-color: transparent;

  transition: 0.5s;
::placeholder { 
  color: #EDF5E1;
  opacity: 0.8;
}

input {
  color: #EDF5E1;
}

 
`

const Button = styled.input`
 width: 90px;
 color: #EDF5E1; 
 background-color: transparent ;
 padding: 10px;
 width: 150px;
 border-color: #EDF5E1 ;
 cursor: pointer;
 transition: all 0.3s ease-in-out;
 &:hover {
    color: #05385B;
    background-color:#EDF5E1 ;
  }
  &:disabled {
     cursor: default ;
     color: #EDF5E1; 
     background-color: transparent ;
  }
  ${mobile({})}
`




const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const [emailError, setEmailError] = useState('')
  const [inputVal, setInputVal] = useState('')
  const [inputValM, setInputValM] = useState('')
  const [inputValE, setInputValE] = useState('')

  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('')
      setInputValE(e.target.value)
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  const form = useRef();
  const sendEmail = (e) => {

    e.preventDefault();
    emailjs.sendForm('service_1thnxjv', 'template_umctqp8', form.current, 'user_ImHCB104rkKDPKhAAlWs6')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
    swal("Email has been sent.", {
      buttons: false,
      timer: 1000,
    });
    setInputValE('');
    setEmailError('');

  };
  return (
    <Element id='contact' name='contact'>
      <Container >
        <ContactInfoBlock data-aos="fade-up">
          <TextH>Contact Info</TextH>
          <Text><LocationOnIcon></LocationOnIcon> Address: 11230 NE 132nd St, Kirkland, Washington, 98034</Text>
          <Text><LocalPhoneIcon></LocalPhoneIcon> Phone: +1(425)496-50-83</Text>
          <Text><EmailIcon></EmailIcon> Email: aramic9778@gmail.com</Text>
          <Text><WebIcon></WebIcon> Website: https://aramic9778.github.io/portfolio/</Text>
        </ContactInfoBlock>
        <ContactFormBlock data-aos="fade-up" ref={form}>
          <TextH>Contact Form</TextH>
          <NameandEmail>
            <RegularInput onChange={e => setInputVal(e.target.value)} name='name' placeholder='*Name'></RegularInput>

            <RegularInput name='email' placeholder='*Email' onChange={(e) => validateEmail(e)}></RegularInput><br></br>
            <div style={{

              color: '#EDF5E1',
              fontFamily: 'Special Elite',
              fontSize: "15px",
            }}>{emailError}</div>

          </NameandEmail>

          <RegularInput name='subject' placeholder='Subject'></RegularInput>


          <MessageInput name='message' placeholder='*Message...' onChange={e => setInputValM(e.target.value)} ></MessageInput>

          <Button disabled={!inputVal || !inputValM || !inputValE} type="submit" value="Send" onClick={sendEmail} />
        </ContactFormBlock>

      </Container >
    </Element>
  )
}

export default Contact