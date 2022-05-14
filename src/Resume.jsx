import React from 'react'
import { Header } from 'semantic-ui-react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import styled from 'styled-components'
import JRResume from './resume.pdf'



const Container = styled.div`
 background-color: #8EE4AF;
 border-top: 10px dashed white;
 display:  flex;
 flex-direction: column;
 height: auto ;
`

const Title = styled.h1`
  color: white;
  text-align: center ;
  font-family: 'Frijole', cursive;
  font-size: 52px;
`




const Resume = () => {
    return (
        <Container >

            <Title>Résumé</Title>
            <Document file={JRResume} className="header">

                <Page style={{ textAlign: 'center' }} size="A8" pageNumber={1} />
            </Document>

        </Container>

    )
}
export default Resume